import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
//this only states on which url we want which component
const routes: Routes = [
  {path:'signup',
  component:SignupComponent,
  pathMatch:'full'},

  {path:'' ,
  component : HomeComponent,
  pathMatch:'full'},

  {path:'login',
  component:LoginComponent,
  pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
