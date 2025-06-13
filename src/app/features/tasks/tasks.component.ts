import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../services/task.service';
import { Task } from '../models/task.model';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NavbarComponent,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatTableModule,
    MatCheckboxModule
  ],
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {
  tasks: Task[] = [];
  newTask: Partial<Task> = { title: '', description: '' };
  editingTaskId: string | null = null;
  userEmail: string = '';
  displayedColumns: string[] = ['title', 'description', 'createdAt', 'completed', 'actions'];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    const userStr = localStorage.getItem('usuario');
    if (userStr) {      
      this.userEmail = userStr;
    }
    this.loadTasks();
  }

  loadTasks() {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  addTask() {
    if (!this.newTask.title?.trim()) return;

    this.taskService.createTask(this.newTask).subscribe(() => {
      this.loadTasks();
      this.newTask = { title: '', description: '' };
    });
  }

  editTask(task: Task) {
    this.editingTaskId = task.id;
    this.newTask = { title: task.title, description: task.description, completed: task.completed };
  }

  updateTask() {
    if (!this.editingTaskId || !this.newTask.title?.trim()) return;

    this.taskService.updateTask(this.editingTaskId, this.newTask).subscribe(() => {
      this.loadTasks();
      this.cancelEdit();
    });
  }

  deleteTask(id: string) {
    this.taskService.deleteTask(id).subscribe(() => this.loadTasks());
  }

  cancelEdit() {
    this.editingTaskId = null;
    this.newTask = { title: '', description: '' };
  }
}
