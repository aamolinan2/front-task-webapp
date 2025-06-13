
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../models/task.model';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class TaskService {
  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${sessionStorage.getItem('auth_token')}`
    });
  }

  /* getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${environment.apiUrl}/tasks`);
  } */

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${environment.apiUrl}/tasks`, { headers: this.getHeaders() });
  }

  createTask(task: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/tasks`, task, { headers: this.getHeaders() });
  }

  updateTask(id: string, task: any): Observable<any> {
    return this.http.put(`${environment.apiUrl}/tasks/${id}`, task, { headers: this.getHeaders() });
  }

  deleteTask(id: string): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/tasks/${id}`, { headers: this.getHeaders() });
  }

}
