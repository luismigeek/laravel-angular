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

  constructor(
    private authService: GestionarAuthService,
    private notifyService: SnotifyService 
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.notifyService.info('Enviando mensaje... Por favor espere', {timeout: 5000});
    return this.authService.sendPasswordResetLink(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error.error.error)
    );
  }

  handleResponse(res){
    this.notifyService.success(res.data, {timeout: 5000});
    this.form.email = null;
  }

  handleError(error){
    this.notifyService.error(error, {timeout: 5000});
  }
}
