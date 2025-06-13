
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) {}

  async getUserByEmail(email: string): Promise<any> {
    return this.http.get(`${environment.apiUrl}/users/${email}`).toPromise();
  }

  async createUser(email: string) {
    return this.http.post(`${environment.apiUrl}/users`, { email }).toPromise();
  }
}
