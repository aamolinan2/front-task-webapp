import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./features/auth/login/login.component').then(
        (m) => m.LoginComponent
      ),
  },
  {
    path: 'tasks',
    canActivate: [AuthGuard],
    loadComponent: () =>
      import('./features/tasks/tasks.component').then(
        (m) => m.TasksComponent
      ),
  },
  {
    path: '**',
    redirectTo:'',
  },
];
