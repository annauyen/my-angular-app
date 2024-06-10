import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Output() isAddingTask = new EventEmitter<boolean>();
  @Output() close = new EventEmitter();
  @Input({ required: true }) userId!: string;
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  private tasksService = inject(TasksService);

  onCloseTask() {
    this.close.emit();
  }
  onSubmit() {
    // using service
    this.tasksService.addTask(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        date: this.enteredDate,
      },
      this.userId
    ); // emit an object
    this.close.emit();
  }
}
