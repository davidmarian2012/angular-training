import { Injectable } from '@angular/core';
import { User } from '../userlist/interfaces/user';
import { USERS } from '../userlist/mocking/mock-users';

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

  constructor() { }
}
