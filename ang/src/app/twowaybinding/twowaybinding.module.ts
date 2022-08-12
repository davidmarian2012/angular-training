import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NameinputComponent } from './nameinput/nameinput.component';
import { FormsModule } from '@angular/forms';
import { HelloworldModule } from '../helloworld/helloworld.module';


@NgModule({
  declarations: [
    NameinputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HelloworldModule
  ],
  exports: [
    NameinputComponent
  ]
})
export class TwowaybindingModule { }
