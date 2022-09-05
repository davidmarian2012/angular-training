import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

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
