import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from '../interfaces/user';
import { USERS } from '../mocking/mock-users';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.css']
})
export class AddUserFormComponent implements OnInit {
  userform = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    age: new FormControl(0),
    company: new FormControl(''),
    department: new FormControl(''),
    gender: new FormControl(''),
    active: new FormControl(true),
  })

  userToAdd: User={
    firstname: '',
    lastname: '',
    age: 0,
    company: '',
    department: '',
    gender: '',
    active: true
  }

  addUserToList(): any{
    this.userToAdd.firstname = this.userform.get('firstName').value;
    this.userToAdd.lastname = this.userform.get('lastName').value;
    this.userToAdd.age = this.userform.get('age').value;
    this.userToAdd.company = this.userform.get('company').value;
    this.userToAdd.department = this.userform.get('department').value;
    this.userToAdd.gender = this.userform.get('gender').value;
    this.userToAdd.active = this.userform.get('active').value;
    
    this.userService.saveUser(this.userToAdd);
  }

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

}
