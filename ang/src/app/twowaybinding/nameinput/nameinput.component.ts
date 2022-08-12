import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';

@Component({
  selector: 'app-nameinput',
  templateUrl: './nameinput.component.html',
  styleUrls: ['./nameinput.component.css']
})
export class NameinputComponent implements OnInit {
  user: User = {
    name: "david",
    age: 20,
    gender: 'Male',
    activated: true
  };

  constructor() { }

  ngOnInit(): void {
  }

}
