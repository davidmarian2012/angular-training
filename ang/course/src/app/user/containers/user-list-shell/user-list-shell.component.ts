import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-user-list-shell',
  templateUrl: './user-list-shell.component.html',
  styleUrls: ['./user-list-shell.component.css']
})
export class UserListShellComponent implements OnInit {

  @Input() users: User[];
  @Output() decide = new EventEmitter<User>();
  @Output() change = new EventEmitter<User>();
  @Output() showOptions = new EventEmitter();

  decider(user: User){
    this.decide.emit(user);
  }

  changeStatus(user: User){
    this.change.emit(user);
  }

  changeShowOptions(){
    this.showOptions.emit();
  }

  constructor() { }

  ngOnInit(): void {
  }

}