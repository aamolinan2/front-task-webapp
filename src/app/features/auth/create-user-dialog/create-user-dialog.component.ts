import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { NotificationService } from '../../services/notification.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-create-user-dialog',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-user-dialog.component.html',
  styleUrls: ['./create-user-dialog.component.scss']
})
export class CreateUserDialogComponent {
  @Output() close = new EventEmitter<void>();
  email: string = '';

  constructor(
    private userService: UserService,
    private notificationService: NotificationService
  ) {}

  async createUser() {
    if (!this.email.trim()) {
      this.notificationService.error('El email no puede estar vacío');
      return;
    }

    try {
      let response = await this.userService.createUser(this.email);
      console.log('response ', response)
      this.notificationService.success('Usuario creado exitosamente');
      this.close.emit();
    } catch (err) {
      const message =
      err instanceof HttpErrorResponse && err.error?.message
      ? err.error.message
      : 'Error al crear el usuario.';     
      this.notificationService.error(message);
    }
  }
}
