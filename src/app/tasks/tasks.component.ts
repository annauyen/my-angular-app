import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name?: string;
  @Output() select = new EventEmitter();

  private tasksService: TasksService;
  constructor(tasksService: TasksService) {
    this.tasksService = tasksService;
  }

  isAddingTask = false;

  onSelectUser() {
    this.select.emit(this.name);
  }

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onCompleteTask(id: string) {
    // console.log('hello');
    this.tasksService.removeTask(this.userId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask(cancelTask: boolean) {
    cancelTask = false;
    this.isAddingTask = cancelTask;
  }
}
