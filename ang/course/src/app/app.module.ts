import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { GuardService } from './guard.service';
import { AccountService } from './auth/services/account.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon'
import {MatFormFieldModule} from '@angular/material/form-field';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatFormFieldModule,
    AuthModule,
    UserModule,
    SharedModule
  ],
  providers: [GuardService, AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
