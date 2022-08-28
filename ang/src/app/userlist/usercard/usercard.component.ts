import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-usercard',
  templateUrl: './usercard.component.html',
  styleUrls: ['./usercard.component.css']
})
export class UsercardComponent implements OnInit {
  
  showOnlyActive = false;
  changeShowOptions(){
    this.showOnlyActive = !this.showOnlyActive;
  }

  changeStatus(user: User){
    user.active = !user.active;
  }

  decider(user: User){
    if(this.showOnlyActive == false) return false;
    return !user.active;
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
