import { Component, OnInit } from '@angular/core';
import { GestionarAuthService } from 'src/app/services/gestionar-auth.service';
import { GestionarTokenService } from 'src/app/services/gestionar-token.service';
import { Router } from '@angular/router';
import { GestionarLoginService } from 'src/app/services/gestionar-login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public form = {
    name: null,
    email: null,
    password: null,
    password_confirmation : null
  }

  public error = [];
  
  constructor(
    private authService: GestionarAuthService,
    private tokenService: GestionarTokenService,
    private loginService: GestionarLoginService,
    private router: Router
  ) {}

  onSubmit(){
    this.error = [];
    return this.authService.signup(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)     
    );
  }

  handleResponse(data){
    this.tokenService.handle(data.access_token);
    this.loginService.cambiarAuthStatus(true);
    this.router.navigateByUrl('/profile');    
  }

  handleError(error){
    this.error = error.error.errors;    
  }

  ngOnInit(): void {
  }

}
