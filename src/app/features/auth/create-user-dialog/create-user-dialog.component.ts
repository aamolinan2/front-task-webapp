import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { NotificationService } from '../../services/notification.service';

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
      await this.userService.createUser(this.email);
      this.notificationService.success('Usuario creado exitosamente');
      this.close.emit();
    } catch (err) {
      this.notificationService.error('Error al crear el usuario');
    }
  }
}
