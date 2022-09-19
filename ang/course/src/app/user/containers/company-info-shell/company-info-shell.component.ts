import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-company-info-shell',
  templateUrl: './company-info-shell.component.html',
  styleUrls: ['./company-info-shell.component.css']
})
export class CompanyInfoShellComponent implements OnInit {

  user: User;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.user = this.userService.currentUser;
  }

}
