import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './display/users/users.component';
import { AdduserComponent } from './display/adduser/adduser.component';

const routes: Routes = [
  {path:'users', component: UsersComponent},
  {path:'adduser', component: AdduserComponent},
  {path:'', redirectTo: '/users', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
