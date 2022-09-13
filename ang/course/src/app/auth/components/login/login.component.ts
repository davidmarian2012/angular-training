import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ACCOUNTS } from '../../mocks/accounts';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  accountForm = new FormGroup({
    username: new FormControl('', [
      Validators.required
    ]),
    password: new FormControl('', [
      Validators.required
    ])
  })

  tryLogin(): any{
      ACCOUNTS.map((account) => {
        if(account.username == this.accountForm.get('username')!.value!)
        {
          if(account.password == this.accountForm.get('password')!.value!)
          {
            console.log('success');
          }
          else
          {
            console.log("failure");
          }
        }
      })
  }

  constructor() { }

  ngOnInit(): void {
  }

}
