import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/user/interfaces/user';

@Component({
  selector: 'app-display-cards',
  templateUrl: './display-cards.component.html',
  styleUrls: ['./display-cards.component.css']
})
export class DisplayCardsComponent implements OnInit {

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