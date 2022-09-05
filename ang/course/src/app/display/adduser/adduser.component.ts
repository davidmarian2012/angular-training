import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/User';
import { USERS } from 'src/app/mocking/Users';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  userform = new FormGroup({
    firstName: new FormControl('', [
      Validators.required
    ]),
    lastName: new FormControl('', [
      Validators.required
    ]),
    age: new FormControl(0, [
      Validators.required,
      Validators.min(15),
      Validators.max(100)
    ]),
    company: new FormControl('', [
      Validators.maxLength(35)
    ]),
    department: new FormControl(''),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.pattern(/^[\w.+\-]+@gmail.com$/)
    ], this.doesEmailExist),
    gender: new FormControl('', [
      Validators.required
    ]),
    active: new FormControl(true),
  })

  userToAdd: User={
    firstname: '',
    lastname: '',
    age: 0,
    company: '',
    department: '',
    email: '',
    gender: '',
    active: true
  }

  addUserToList(){
    this.userToAdd.firstname = this.userform.get('firstName')!.value!;
    this.userToAdd.lastname = this.userform.get('lastName')!.value!;
    this.userToAdd.age = this.userform.get('age')!.value!;
    this.userToAdd.company = this.userform.get('company')!.value!;
    this.userToAdd.department = this.userform.get('department')!.value!;
    this.userToAdd.email = this.userform.get('email')!.value!;
    this.userToAdd.gender = this.userform.get('gender')!.value!;
    this.userToAdd.active = this.userform.get('active')!.value!;
    
    this.userService.saveUser(this.userToAdd);
  }

  doesEmailExist(emailControl: any): Promise<any> | Observable<any>{
    let foundEmail = false;
    let email = emailControl.value;

    USERS.map((user) => {
      if(user.email == email)
      {
        foundEmail = true;
      }
    })

    const response = new Promise((resolve, reject) => {
      setTimeout(()=>{
      if(foundEmail){
        resolve({doesEmailExist: true})
      }
      else{
        resolve(null)
      }
    }, 100);
  });
    return response;
  }

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

}
