import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    HeaderBarComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    HeaderBarComponent
  ]
})
export class SharedModule { }
