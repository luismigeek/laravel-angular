import { Component, OnInit } from '@angular/core';
import { GestionarAuthService } from 'src/app/services/gestionar-auth.service';
import { GestionarTokenService } from 'src/app/services/gestionar-token.service';

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
    private service:GestionarAuthService,
    private token: GestionarTokenService
    ) {}

  ngOnInit(): void {
  }

  onSubmit(){
    this.error = null;
    return this.service.login(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)     
    );
  }

  handleResponse(data){
    this.token.handle(data.access_token);
  }

  handleError(error){
    this.error = error.error.error;    
  }
}
