import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-usercard',
  templateUrl: './usercard.component.html',
  styleUrls: ['./usercard.component.css']
})
export class UsercardComponent implements OnInit {
  
  warning: string = 'warning';
  cancel: string = 'cancel';
  submit: string = 'submit';

  showOnlyActive = false;
  changeShowOptions(){
    this.showOnlyActive = !this.showOnlyActive;
  }

  changeStatus(user){
    user.activated = !user.activated;
  }

  decider(user){
    if(this.showOnlyActive == false) return false;
    return !user.activated;
  }

  users: User[] = [];
  getUsers(): void{
    this.users = this.userService.getUsers();
  }

  selectedUser?: User;
  onSelect(user: User): void{
    this.selectedUser = user;
    console.log(user);
  }

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  

}
