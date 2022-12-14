import { Component, OnInit, Input, HostListener } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../../interfaces/user';
import { ComponentCanDeactivate } from '../../services/unsaved.guard';
import { UserService } from '../../services/user.service'


interface UserForm{
  firstName: FormControl<string>,
  lastName: FormControl<string>,
  age: FormControl<number>,
  company: FormControl<string>,
  department: FormControl<string>,
  email: FormControl<string>,
  gender: FormControl<string>,
  active: FormControl<boolean>
}

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  @Input() newUser: boolean;

  userform = new FormGroup<UserForm>({
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
      Validators.maxLength(35),
      Validators.required
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

  firstNameModel: string = this.userform.get('firstName')!.value!;
  lastNameModel: string = this.userform.get('lastName')!.value!;

  checkUnsavedChanges(): string {
    if(this.newUser == false){
      if(this.userform.get('firstName')!.value! != "firstNameModel")
      return "unsaved first name";
    }
    return "ok";
  }
  
  id = this.route.snapshot.params['id'];
  selecteduser = this.userService.getUserById(this.id);

  doesEmailExist(emailControl: any): Promise<any> | Observable<any>{
    let foundEmail = false;
    let email = emailControl.value;

      /*USERS.map((user) => {
        if(user.email == email)
        {
          foundEmail = true;
        }
      })*/
    
    const response = new Promise((resolve, reject) => {
      setTimeout(()=>{
      if(foundEmail){
        resolve({doesEmailExist: true})
      }
      else{
        resolve(null)
      }
    }, 1);
  });
    return response;
  }

  userToAdd: User={
    id: 4,
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

    //this.userService.saveUser(this.userform.getRawValue());
  }

  updateUser(){
    let userToUpdate = this.userService.getUserById(this.id);
    userToUpdate.firstname = this.userform.get('firstName')!.value!;
    userToUpdate.lastname = this.userform.get('lastName')!.value!;
    userToUpdate.age = this.userform.get('age')!.value!;
    userToUpdate.company = this.userform.get('company')!.value!;
    userToUpdate.department = this.userform.get('department')!.value!;
    userToUpdate.email = this.userform.get('email')!.value!;
    userToUpdate.gender = this.userform.get('gender')!.value!;
    userToUpdate.active = this.userform.get('active')!.value!;
  }

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userform.patchValue({
      firstName: this.selecteduser.firstname,
      lastName: this.selecteduser.lastname,
      age: this.selecteduser.age,
      company: this.selecteduser.company,
      department: this.selecteduser.department,
      email: this.selecteduser.email,
      gender: this.selecteduser.gender,
      active: this.selecteduser.active
    });
  }


}