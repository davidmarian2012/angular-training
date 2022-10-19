import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Account } from '../../interfaces/Account';
import { ACCOUNTS } from '../../mocks/accounts';
import { AccountService } from '../../services/account.service';

interface RegisterForm{
  username: FormControl<string>,
  password: FormControl<string>,
  confirmPassword: FormControl<string>
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup<RegisterForm>({
    username: new FormControl('', [
      Validators.required
    ]),
    password: new FormControl('', [
      Validators.required
    ]),
    confirmPassword: new FormControl('', [
      Validators.required
    ])
  })

  accountRegister: Account={
    username: '',
    password: ''
  }

  registerUser(){
    this.accountRegister.username = this.registerForm.get('username')!.value!;
    this.accountRegister.password = this.registerForm.get('password')!.value!;
    
    if(this.registerForm.get('confirmPassword')!.value! == this.registerForm.get('password')!.value!)
    {
      window.alert("Account created successfuly!");
      this.accountService.saveAccount(this.accountRegister);
      this.router.navigate(['/login']);
    }
    else
    {
      window.alert("Passwords do not match!");
    }
    

    //this.accountService.saveAccount(this.registerForm.getRawValue());
  }

  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit(): void {
  }

}
