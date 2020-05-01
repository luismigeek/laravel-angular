import { Component, OnInit } from '@angular/core';
import { GestionarAuthService } from 'src/app/services/gestionar-auth.service';
import { SnotifyService } from 'ng-snotify';

@Component({
  selector: 'app-request-reset',
  templateUrl: './request-reset.component.html',
  styleUrls: ['./request-reset.component.css']
})
export class RequestResetComponent implements OnInit {

  public form = {
    email: null,
  }

  public error = null;

  constructor(
    private authService: GestionarAuthService,
    private notifyService: SnotifyService 
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.error = null;
    return this.authService.sendPasswordResetLink(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.notifyService.error(error.error.error)
    );
  }

  handleResponse(res){
    this.notifyService.success(res.data);
    this.form.email = null;
    // this.tokenService.handle(data.access_token);
    // this.loginService.cambiarAuthStatus(true);
    // this.router.navigateByUrl('/profile');
  }
}
