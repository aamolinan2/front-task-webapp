
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { TasksComponent } from './features/tasks/tasks.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'tasks', component: TasksComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
