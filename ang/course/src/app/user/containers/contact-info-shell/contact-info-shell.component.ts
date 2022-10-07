import { Component, HostListener, OnInit } from '@angular/core';
import { User } from '../../interfaces/user';
import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-info-shell',
  templateUrl: './contact-info-shell.component.html',
  styleUrls: ['./contact-info-shell.component.css']
})
export class ContactInfoShellComponent implements OnInit {

  id = this.route.snapshot.params['id'];
  user: User = this.userService.getUserById(this.id);

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
