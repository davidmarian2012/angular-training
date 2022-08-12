import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsercardComponent } from './usercard/usercard.component';


@NgModule({
  declarations: [
    UsercardComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    UsercardComponent
  ]
})
export class UserlistModule { }
