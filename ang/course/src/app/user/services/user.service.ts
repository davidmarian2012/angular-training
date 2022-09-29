import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from '../interfaces/user';
import { USERS } from '../mocks/Users';

// @Injectable({
//   providedIn: 'root'
// })
// export class UserService {

//   public currentUser: User;
  
//   public _users: User[];
//   public _usersSbj: Subject<User[]>;
//   public users$: Observable<User[]>;

//   constructor(private http: HttpClient) {
//     this.users$ = this._usersSbj.asObservable();
//    }

//   getUsers(): Observable<User[]>{
//     return this.users$;
//   }

//   editUser(user: User):void{
//     var index = this._users.findIndex(x=>x.id === user.id);
//     this._users[index] = user;
//   }

//   // getUsersObs(): Observable<User[]>{
//   //   return this.http.get<UserResponseDTO>('https://reqres.in/api/user').pipe(
//   //     map((response)=>{
//   //       return response.datemap((user)=>{
//   //         return {
//   //         id: 10,
//   //         firstname: user.first_name,
//   //         lastname: user.last_name,
//   //         age: 29,
//   //         company: 'Coherent',
//   //         department: 'front-end',
//   //         email: user.email,
//   //         gender: '',
//   //         active: true
//   //         }
//   //       })
//   //     })
//   //   ).subscribe(data => this._usersSbj.next(data))
//   // }

//   saveUser(user: User): any{
//     USERS.push(user);
//   }

//   getUserById(id): any{
//     let userToReturn: any = false;
//     USERS.map((user)=>{
//       if(user.id==id){
//         userToReturn = user;
//       }
//     })
//     return userToReturn;
//   }
// }

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser: User;

  getUsers(): User[]{
    return USERS;
  }

  saveUser(user: User): any{
    USERS.push(user);
  }

  getUserById(id): any{
    let userToReturn: any = false;
    USERS.map((user)=>{
      if(user.id==id){
        userToReturn = user;
      }
    })
    return userToReturn;
  }

  constructor() { }
}