import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { ComponentCanDeactivate } from '../../services/unsaved.guard';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-user-shell',
  templateUrl: './edit-user-shell.component.html',
  styleUrls: ['./edit-user-shell.component.css']
})
export class EditUserShellComponent implements OnInit, ComponentCanDeactivate {

  id = this.route.snapshot.params['id'];
  selecteduser = this.userService.getUserById(this.id);

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
  }

  @HostListener('window:beforeunload')
  canDeactivate(): boolean | Observable<boolean>{
    return false;
  }

}
