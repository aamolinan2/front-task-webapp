
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private tokenKey = 'auth_token';
  private userSesion = 'usuario';

  constructor(private http: HttpClient) {}

  async login(email: string): Promise<boolean> {
    try {
      const res = await this.http.post<any>(`${environment.apiUrl}/users/login`, { email }).toPromise();
      
      if (res?.token) {        
        sessionStorage.setItem(this.tokenKey, res.token);
        sessionStorage.setItem(this.userSesion, res.email);
        return true;
      }
      return false;
    } catch {
      return false;
    }
  }

  storeToken(token: string): void {
    sessionStorage.setItem(this.tokenKey, token);
  }

  getToken() {
    return sessionStorage.getItem(this.tokenKey);
  }

  isLoggedIn(): boolean {
    let isLogged = !!sessionStorage.getItem(this.tokenKey);
    return isLogged;
  }

  logout() {
    sessionStorage.removeItem(this.tokenKey);
    sessionStorage.removeItem(this.userSesion);
  }
}
