import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {

  id = this.route.snapshot.params['id'];
  selecteduser = this.userService.getUserById(this.id);

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
  }

}
