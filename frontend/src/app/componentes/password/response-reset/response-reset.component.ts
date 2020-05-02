import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GestionarAuthService } from 'src/app/services/gestionar-auth.service';
import { SnotifyService } from 'ng-snotify';

@Component({
  selector: 'app-response-reset',
  templateUrl: './response-reset.component.html',
  styleUrls: ['./response-reset.component.css']
})
export class ResponseResetComponent implements OnInit {

  public form = {
    email: null,
    password: null,
    password_confirmation: null,
    resetToken: null
  }

  constructor(
    private route: ActivatedRoute,
    private authService: GestionarAuthService,
    private router: Router,
    private notify: SnotifyService
  ) {
    route.queryParams.subscribe(params => {
      this.form.resetToken = params['token'];
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    return this.authService.changePassword(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error.error.errors)
    );
  }

  handleResponse(res) {
    let _router = this.router;
    this.notify.confirm('¡Tu contraseña ha sido restablecida!, ahora ve a iniciar sesión', {
      buttons: [
        {text: 'Iniciar sesión', 
        action: toster => { _router.navigateByUrl('/login'),
        this.notify.remove(toster.id)
        }
        }, 
      ]
    });    
    this.cleanForm();
  }

  handleError(errors) {
    for (let key in errors) {
      this.notify.error(errors[key],{
        timeout: 10000,
        showProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
      });
    }
  }

  cleanForm(){
    this.form.email = null;
    this.form.password = null;
    this.form.password_confirmation = null;
    this.form.resetToken = null;
  }

}
