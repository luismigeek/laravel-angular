import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './componentes/login/login.component';
import { SignupComponent } from './componentes/signup/signup.component';
import { RequestResetComponent } from './componentes/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './componentes/password/response-reset/response-reset.component';
import { ProfileComponent } from './componentes/profile/profile.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'password-request-reset', component: RequestResetComponent},
  {path: 'password-response-reset', component: ResponseResetComponent},
  {path: 'profile', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
