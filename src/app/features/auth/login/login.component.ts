import { Component } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CreateUserDialogComponent } from '../create-user-dialog/create-user-dialog.component';
import { NotificationService } from '../../services/notification.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatDialogModule,
    CreateUserDialogComponent
],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email = '';
  newUserEmail = '';
  showModal = false;
  showCreateUser = false;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router,
    private dialog: MatDialog,
    private notification: NotificationService,
    private loaderService: LoaderService
  ) {}



  async login() {
    if (!this.email) return;

    try {      

      const user = await this.userService.getUserByEmail(this.email);
      if (!user || !user.email) {
        this.notification.error('El usuario no existe!');
      }
    } catch {
      this.notification.info('No se encontro este usuario.');
      return;
    }

    const success = await this.authService.login(this.email);
    if (success) {
      this.router.navigate(['/tasks']);
    } else {
      this.notification.error('Error al iniciar sesión.');
    }
  }

  openCreateUserDialog(): void {
    this.dialog.open(CreateUserDialogComponent);
  }


}

