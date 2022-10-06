import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from '../interfaces/user';
import { USERS } from '../mocks/Users';
import { map } from 'rxjs';
import { UserDTO } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public currentUser: User;

  public users$: Observable<User[]>;
  
  constructor(private http: HttpClient) {}

  // getUsers(): Observable<User[]>{
  //   return this.users$;
  // }

  getUsers(): User[]{
    return USERS;
  }

  getUsersObs(): Observable<User[]>{
    return this.http.get<UserDTO>('https://reqres.in/api/users').pipe(
      map((response) => {
        return response.results.map((user) => {
          return {
            id: 1,
            firstname: 'hey',
            lastname: '',
            age: 1,
            company: '',
            department: '',
            email: '',
            gender: '',
            active: true
            }
        })
      })
    )
  }

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
