import { Component, OnInit } from '@angular/core';
import { GestionarAuthService } from 'src/app/services/gestionar-auth.service';
import { GestionarTokenService } from 'src/app/services/gestionar-token.service';
import { Router } from '@angular/router';
import { GestionarLoginService } from 'src/app/services/gestionar-login.service';
import { SnotifyService } from 'ng-snotify';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form = {
    email: null,
    password: null
  }
  
  constructor(
    private tokenService: GestionarTokenService,
    private authService: GestionarAuthService,
    private loginService: GestionarLoginService,
    private router: Router,
    private notify: SnotifyService
    ) {}

  ngOnInit(): void {
  }

  onSubmit(){
    return this.authService.login(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error.error.errors)     
    );
  }

  handleResponse(data){
    this.tokenService.handle(data.access_token);
    this.loginService.cambiarAuthStatus(true);
    this.router.navigateByUrl('/profile');
  }

  handleError(errors) {
    console.log(errors);    
    for (let key in errors) {
      this.notify.error(errors[key],{
        timeout: 10000,
        showProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
      });
    }
  }

}
