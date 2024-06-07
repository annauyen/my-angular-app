import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  // isAddingTask = true;
  @Output() isAddingTask = new EventEmitter<boolean>();
  @Output() add = new EventEmitter<NewTaskData>(); // this is an object

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  onCloseTask() {
    this.isAddingTask.emit(false);
  }
  onSubmit() {
    this.add.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate,
    }); // emit an object
  }
}
