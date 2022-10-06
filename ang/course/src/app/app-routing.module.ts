import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserShellComponent } from './user/containers/add-user-shell/add-user-shell.component';
import { EditUserShellComponent } from './user/containers/edit-user-shell/edit-user-shell.component';
import { UserListShellComponent } from './user/containers/user-list-shell/user-list-shell.component';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { AuthGuard } from './auth/services/auth.guard';
import { CompanyInfoShellComponent } from './user/containers/company-info-shell/company-info-shell.component';
import { ContactInfoShellComponent } from './user/containers/contact-info-shell/contact-info-shell.component';
import { UnsavedGuard } from './user/services/unsaved.guard';

const routes: Routes = [
  {path:'users', component: UserListShellComponent, canActivate: [AuthGuard],
  children: [
    {path:'contact-info/:id', component: ContactInfoShellComponent},
    {path:'company-info/:id', component: CompanyInfoShellComponent}
  ]},
  {path:'add', component: AddUserShellComponent, canActivate: [AuthGuard]},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'edit/:id', component: EditUserShellComponent, canActivate: [AuthGuard], canDeactivate: [UnsavedGuard]},
  // {path:'contact-info/:id', component: ContactInfoShellComponent},
  // {path:'company-info/:id', component: CompanyInfoShellComponent},
  {path:'', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
