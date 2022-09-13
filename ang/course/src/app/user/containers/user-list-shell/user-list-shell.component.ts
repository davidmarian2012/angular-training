import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list-shell',
  templateUrl: './user-list-shell.component.html',
  styleUrls: ['./user-list-shell.component.css']
})
export class UserListShellComponent implements OnInit {

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