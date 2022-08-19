import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsercardComponent } from './usercard/usercard.component';
import {MatButtonModule} from '@angular/material/button';
import { UserdetailsComponent } from './userdetails/userdetails.component';


@NgModule({
  declarations: [
    UsercardComponent,
    UserdetailsComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
  ],
  exports: [
    UsercardComponent
  ]
})
export class UserlistModule { }
