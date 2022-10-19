import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { User } from '../interfaces/user';
import { USERS } from '../mocks/Users';
import { map } from 'rxjs';
import { UserDTO } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public currentUser: User;
  _users: User[];
  _api: string = 'https://reqres.in/api/users';
  
  constructor(private http: HttpClient) {}

  // getUsers(): User[]{
  //   return USERS;
  // }

  getUsersObs(): Observable<User[]>{
   
    return this.http.get<UserDTO>(this._api)
      .pipe(
        map((respoonse) => {
          return respoonse.data.map((user)=>{
            return {
              id: user.id,
              firstname: user.first_name,
              lastname: user.last_name,
              age: 25,
              company: '',
              department: '',
              email: '',
              gender: '',
              active: true
            }
          })
        }),
        tap((val) => {
          this._users = val;
        })
    )
  };



  saveUser(user: User): any{
    USERS.push(user);
  }

  getUserById(id:number): any{
    let userToReturn: any = false;
    USERS.map((user)=>{
      if(user.id==id){
        userToReturn = user;
      }
    })
    return userToReturn;
  }
}
