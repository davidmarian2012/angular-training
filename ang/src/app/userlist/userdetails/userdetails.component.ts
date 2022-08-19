import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { User } from 'src/app/user';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserdetailsComponent implements OnInit {

  @Input() user?: User;

  constructor() { }

  ngOnInit(): void {
  }

}
