import {
  Component,
  EventEmitter,
  Input,
  Output,
  computed,
  signal,
} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

// create a helper const to pick random index for the user
const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // storing data in component class
  // selectedUser = DUMMY_USERS[randomIndex]; // now we can use the data in the template html
  // getter: usable like a property
  // get imagePath() {
  //   // now we can use this like a property
  //   return 'users/' + this.selectedUser.avatar;
  // }
  // onSelectUser() { // using property binding
  //   // console.log('clicked');
  //   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  //   this.selectedUser = DUMMY_USERS[randomIndex];
  // }
  // using signals
  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  // using Signals to get the imagePath
  // imagePath = computed(() => 'users/' + this.selectedUser().avatar);
  // onSelectUser() {
  //   // using signal
  //   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  //   this.selectedUser.set(DUMMY_USERS[randomIndex]);
  // }

  @Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;

  @Output() select = new EventEmitter();

  get imagePath() {
    return 'users/' + this.avatar;
  }

  onSelectUser() {
    this.select.emit(this.id);
    // this.select.emit(this.name);
  }
}
