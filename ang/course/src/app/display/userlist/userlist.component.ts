import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/interfaces/User';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

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
