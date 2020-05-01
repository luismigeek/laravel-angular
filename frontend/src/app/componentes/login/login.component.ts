import { Component, OnInit } from '@angular/core';
import { GestionarAuthService } from 'src/app/services/gestionar-auth.service';
import { GestionarTokenService } from 'src/app/services/gestionar-token.service';
import { Router } from '@angular/router';
import { GestionarLoginService } from 'src/app/services/gestionar-login.service';

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

  public error = null;
  
  constructor(
    private tokenService: GestionarTokenService,
    private authService: GestionarAuthService,
    private loginService: GestionarLoginService,
    private router: Router
    ) {}

  ngOnInit(): void {
  }

  onSubmit(){
    this.error = null;
    return this.authService.login(this.form).subscribe(
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
    this.error = error.error.error;    
  }
}
