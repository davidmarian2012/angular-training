import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shared-card',
  templateUrl: './shared-card.component.html',
  styleUrls: ['./shared-card.component.css']
})
export class SharedCardComponent implements OnInit {

  @Input() info: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
