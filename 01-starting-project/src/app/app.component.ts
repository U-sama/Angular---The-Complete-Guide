import { DUMMY_USERS } from './../assets/Dummy-users';
import { Component } from '@angular/core';
import { UserComponent } from "./user/user.component";
import { TasksComponent } from './tasks/tasks.component';
import { HeaderComponent } from './header/header.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserComponent,TasksComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId? : string;

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId);
  }

  onSelectUser(id:string){
    this.selectedUserId = id;
  }
}
