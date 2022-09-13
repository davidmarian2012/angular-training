import { Injectable } from '@angular/core';
import { Account } from '../interfaces/Account';
import { ACCOUNTS } from '../mocks/accounts';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  getAccounts(): Account[]{
    return ACCOUNTS;
  }

  saveAccount(account: Account): any{
    ACCOUNTS.push(account);
  }

  constructor() { }
}
