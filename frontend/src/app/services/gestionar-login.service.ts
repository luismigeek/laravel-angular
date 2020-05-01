import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GestionarTokenService } from './gestionar-token.service';

@Injectable({
  providedIn: 'root'
})
export class GestionarLoginService {

  private loggedIn = new BehaviorSubject<boolean>(this.tokenService.loggedIn());

  authStatus = this.loggedIn.asObservable();

  cambiarAuthStatus(value: boolean){
    this.loggedIn.next(value);
  }

  constructor(
    private tokenService: GestionarTokenService
  ) { }
}
