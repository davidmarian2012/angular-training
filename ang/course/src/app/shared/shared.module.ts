import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';
import { AppRoutingModule } from '../app-routing.module';
import { DisplayCardsComponent } from './components/display-cards/display-cards.component';


@NgModule({
  declarations: [
    HeaderBarComponent,
    DisplayCardsComponent
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
