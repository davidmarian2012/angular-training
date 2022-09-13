import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { AddressFormComponent } from './components/address-form/address-form.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddUserShellComponent } from './containers/add-user-shell/add-user-shell.component';
import { EditUserShellComponent } from './containers/edit-user-shell/edit-user-shell.component';
import { UserListShellComponent } from './containers/user-list-shell/user-list-shell.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    AddressFormComponent,
    UserFormComponent,
    AddUserShellComponent,
    EditUserShellComponent,
    UserListShellComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatIconModule,
    AppRoutingModule
  ],
  exports: [
    AddUserShellComponent,
    EditUserShellComponent,
    UserListShellComponent
  ]
})
export class UserModule { }
