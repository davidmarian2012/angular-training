import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsercardComponent } from './usercard/usercard.component';
import { MatButtonModule } from '@angular/material/button';
import { TestbuttonComponent } from './testbutton/testbutton.component';

import { VehiclesModule } from '../vehicles/vehicles.module';
import { AddUserFormComponent } from './add-user-form/add-user-form.component';

import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UsercardComponent,
    TestbuttonComponent,
    AddUserFormComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    VehiclesModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  exports: [
    UsercardComponent
  ]
})
export class UserlistModule { }
