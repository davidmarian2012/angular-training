import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';

@Component({
  selector: 'app-usercard',
  templateUrl: './usercard.component.html',
  styleUrls: ['./usercard.component.css']
})
export class UsercardComponent implements OnInit {
  users: User[] = [
    {
      name: 'Alex',
      age: 28,
      gender: 'Male',
      activated: true
    },
    {
      name: 'Mary',
      age: 31,
      gender: 'Female',
      activated: true
    },
    {
      name: 'Joe',
      age: 22,
      gender: 'Male',
      activated: true
    },
  ]

  showOnlyActive = false;
  changeShowOptions(){
    this.showOnlyActive = !this.showOnlyActive;
    console.log(this.showOnlyActive);
  }

  changeStatus(user){
    user.activated = !user.activated;
    console.log(user.activated);
  }

  decider(user){
    if(this.showOnlyActive == false) return false;
    return !user.activated;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
