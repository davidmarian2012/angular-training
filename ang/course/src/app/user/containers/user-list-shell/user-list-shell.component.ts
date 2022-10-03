import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { map, Observable } from 'rxjs';
import { User } from '../../interfaces/user';
import { UserService } from '../../services/user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-list-shell',
  templateUrl: './user-list-shell.component.html',
  styleUrls: ['./user-list-shell.component.css']
})
export class UserListShellComponent implements OnInit {

  users: User[] = [];
  users$: Observable<User[]>;

  searchForm = new FormGroup({
    firstName: new FormControl('')
  })

  public pageSlice; 

  getColor(status: boolean): string{
    if(status == true)
    {
      return "green";
    }

    return "black";
  }

  getStatus(status: boolean): string{
    if(status == true)
    {
      return "Active";
    }

    return "Inactive";
  }

  OnPageChange(event: PageEvent){
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if(endIndex > this.users.length){
      endIndex = this.users.length;
    }
    this.pageSlice = this.users.slice(startIndex, endIndex);
  }

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

  // getUsers(): void{
  //   this.cardInfos$ = this.userService.getUsers()
  //   .pipe(
  //     map(users => users.map(u => {
  //       return <Info>{
  //         name: u.firstname,
  //         status: u.active
  //       }
  //     }))
  //   )
  // }

  getUsers(): void{
    this.users = this.userService.getUsers();
  }

  constructor(private userService: UserService) { }

  onSelect(user: User): any{
    this.userService.currentUser = user;
  }

  ngOnInit(): void {
    this.getUsers();
    this.pageSlice = this.users.slice(0,3);
  }

}