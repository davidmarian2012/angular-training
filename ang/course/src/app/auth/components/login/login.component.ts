import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ACCOUNTS } from '../../mocks/accounts';
import { AccountService } from '../../services/account.service';

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
            this.accountService.login();
            this.router.navigate(['/users']);
            console.log('success');
          }
          else
          {
            console.log("failure");
          }
        }
      })
  }

  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit(): void {
  }

}
