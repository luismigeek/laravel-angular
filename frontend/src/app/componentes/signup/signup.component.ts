import { Component, OnInit } from '@angular/core';
import { GestionarAuthService } from 'src/app/services/gestionar-auth.service';
import { GestionarTokenService } from 'src/app/services/gestionar-token.service';
import { Router } from '@angular/router';
import { SnotifyService } from 'ng-snotify';

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
  
  constructor(
    private authService: GestionarAuthService,
    private tokenService: GestionarTokenService,
    private router: Router,
    private notify: SnotifyService
  ) {}

  onSubmit(){
    return this.authService.signup(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error.error.errors)     
    );
  }

  handleResponse(data){
    let _router = this.router;
    this.notify.confirm('¡Ahora ya tienes una cuenta!, ve a iniciar sesión', {
      buttons: [
        {
          text: 'Listo', 
          action: toster => {
            _router.navigateByUrl('/login'),
            this.notify.remove(toster.id)
          }
        }, 
      ]
    });    
    this.clearForm();
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

  clearForm() {
    this.form.name=null;
    this.form.email= null;
    this.form.password= null;
    this.form.password_confirmation = null;
  }

  ngOnInit(): void {
  }

}
