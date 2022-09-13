import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {path:'users', component: UsersComponent},
  // {path:'add', component: AdduserComponent},
  // {path:'login', component: LoginComponent},
  // {path:'register', component: RegisterComponent},
  // {path:'edit/:id', component: EdituserComponent},
  // {path:'', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
