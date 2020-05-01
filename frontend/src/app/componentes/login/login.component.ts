import { Component, OnInit } from '@angular/core';
import { GestionarAuthService } from 'src/app/services/gestionar-auth.service';

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
  
  constructor(private service:GestionarAuthService) {
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.error = null;
    return this.service.login(this.form).subscribe(
      data => console.log(data),
      error => this.handleError(error)     
    );
  }

  handleError(error){
    this.error = error.error.error;    
  }
}
