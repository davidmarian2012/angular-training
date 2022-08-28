import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsercardComponent } from './userlist/usercard/usercard.component';
import { AddUserFormComponent } from './userlist/add-user-form/add-user-form.component';

const routes: Routes = [
  {path:'users', component: UsercardComponent},
  {path:'adduser', component: AddUserFormComponent},
  {path:'', redirectTo: '/users', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
