import { Injectable } from '@angular/core';
import { Account } from '../interfaces/Account';
import { ACCOUNTS } from '../mocks/accounts';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  isLogged: boolean = false;

  getAccounts(): Account[]{
    return ACCOUNTS;
  }

  saveAccount(account: Account): any{
    ACCOUNTS.push(account);
  }

  login(): any{
    this.isLogged = true;
  }

  logout(): any{
    this.isLogged = false;
  }

  isUserLogged(): boolean{
    return this.isLogged;
  }

  constructor() { }
}
