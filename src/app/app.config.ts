import { provideRouter, Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { provideHttpClient } from '@angular/common/http';
import { TasksComponent } from './features/tasks/tasks.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { importProvidersFrom } from '@angular/core';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'tasks', component: TasksComponent }
];

export const appConfig = {
  providers: [provideRouter(routes), provideHttpClient(), importProvidersFrom(MatSnackBarModule)],
};

