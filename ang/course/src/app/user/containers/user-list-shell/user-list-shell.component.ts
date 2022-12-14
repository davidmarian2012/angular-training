import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { User } from '../../interfaces/user';
import { UserService } from '../../services/user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

interface Info{
  name: string;
  status: string;
}

@Component({
  selector: 'app-user-list-shell',
  templateUrl: './user-list-shell.component.html',
  styleUrls: ['./user-list-shell.component.css']
})
export class UserListShellComponent implements OnInit {

  users: User[] = [];
  users$: Observable<User[]>;

  userCounts$: Observable<number>;
  pageEvent: BehaviorSubject<PageEvent> = new BehaviorSubject({length: 12, pageIndex: 0, pageSize: 12, previousPageIndex: 0});

  searchForm = new FormGroup({
    firstName: new FormControl('')
  })

  public pageSlice: User[]; 

  ngOnInit(): void {
    this.getUsers2();

    this.userCounts$ = this.users$.pipe(
      map(cards=>cards.length)
    );

    this.pageSlice = this.users.slice(0,3);
  }

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

  OnPageChange(event: PageEvent): void{
   this.pageEvent.next(event);
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

  getUsers2(): void{
    this.users$ = this.userService.getUsersObs();
  }

  // getUsers(): void{
  //   this.users = this.userService.getUsers();
  // }

  constructor(private userService: UserService) { }

  onSelect(user: User): any{
    this.userService.currentUser = user;
  }

}