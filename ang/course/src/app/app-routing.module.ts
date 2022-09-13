import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserShellComponent } from './user/containers/add-user-shell/add-user-shell.component';
import { EditUserShellComponent } from './user/containers/edit-user-shell/edit-user-shell.component';
import { UserListShellComponent } from './user/containers/user-list-shell/user-list-shell.component';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';

const routes: Routes = [
  {path:'users', component: UserListShellComponent},
  {path:'add', component: AddUserShellComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'edit/:id', component: EditUserShellComponent},
  {path:'', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
