import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './display/users/users.component';
import { AdduserComponent } from './display/adduser/adduser.component';
import { EdituserComponent } from './display/edituser/edituser.component';

const routes: Routes = [
  {path:'users', component: UsersComponent},
  {path:'add', component: AdduserComponent},
  {path:'edit/:id', component: EdituserComponent},
  {path:'', redirectTo: '/users', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
