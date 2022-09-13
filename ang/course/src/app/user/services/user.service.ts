import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { USERS } from '../mocks/Users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

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