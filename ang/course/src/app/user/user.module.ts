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
import { ContactInfoComponent } from './components/contact-info/contact-info.component';
import { CompanyInfoComponent } from './components/company-info/company-info.component';
import { ContactInfoShellComponent } from './containers/contact-info-shell/contact-info-shell.component';
import { CompanyInfoShellComponent } from './containers/company-info-shell/company-info-shell.component';
import {MatTabsModule} from '@angular/material/tabs';
import { AgechangePipe } from './pipes/agechange.pipe'
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    AddressFormComponent,
    UserFormComponent,
    AddUserShellComponent,
    EditUserShellComponent,
    UserListShellComponent,
    ContactInfoComponent,
    CompanyInfoComponent,
    ContactInfoShellComponent,
    CompanyInfoShellComponent,
    AgechangePipe,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatIconModule,
    AppRoutingModule,
    MatTabsModule,
    MatPaginatorModule,
    MatFormFieldModule
  ],
  exports: [
    AddUserShellComponent,
    EditUserShellComponent,
    UserListShellComponent,
    ContactInfoShellComponent,
    CompanyInfoShellComponent
  ]
})
export class UserModule { }
