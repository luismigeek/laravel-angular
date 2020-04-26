import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { SingupComponent } from './componentes/singup/singup.component';
import { ProfileComponent } from './componentes/profile/profile.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { RequestResetComponent } from './componentes/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './componentes/password/response-reset/response-reset.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SingupComponent,
    ProfileComponent,
    NavbarComponent,
    RequestResetComponent,
    ResponseResetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
