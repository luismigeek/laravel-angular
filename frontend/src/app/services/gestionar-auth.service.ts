import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GestionarAuthService {

  private baseUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }

  public signup(data) {
    return this.http.post(`${this.baseUrl}/signup`, data);
  }

  public login(data) {
    return this.http.post(`${this.baseUrl}/login`, data);
  }

}
