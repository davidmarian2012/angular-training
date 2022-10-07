import { Component, HostListener, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ComponentCanDeactivate } from '../../services/unsaved.guard';

@Component({
  selector: 'app-add-user-shell',
  templateUrl: './add-user-shell.component.html',
  styleUrls: ['./add-user-shell.component.css']
})
export class AddUserShellComponent implements OnInit, ComponentCanDeactivate {

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:beforeunload')
  canDeactivate(): boolean | Observable<boolean>{
    return false;
  }

}
