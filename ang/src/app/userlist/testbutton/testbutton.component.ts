import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-testbutton',
  templateUrl: './testbutton.component.html',
  styleUrls: ['./testbutton.component.css']
})
export class TestbuttonComponent implements OnInit {

  @Input() type:string =  '';

  constructor() { }

  ngOnInit(): void {
  }

}
