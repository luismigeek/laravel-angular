import { Component, OnInit } from '@angular/core';
import { GestionarLoginService } from 'src/app/services/gestionar-login.service';
import { Router } from '@angular/router';
import { GestionarTokenService } from 'src/app/services/gestionar-token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public loggedIn: boolean;

  constructor(
    private loginService: GestionarLoginService,
    private tokenService: GestionarTokenService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginService.authStatus.subscribe(value => this.loggedIn = value );
  }

  logout(event: MouseEvent){
    event.preventDefault();
    this.tokenService.remove();
    this.loginService.cambiarAuthStatus(false);
    this.router.navigateByUrl('/login');    
  }

}
