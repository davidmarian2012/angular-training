import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreetingComponent } from './greeting/greeting.component';



@NgModule({
  declarations: [
    GreetingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GreetingComponent
  ]
})
export class HelloworldModule { }
