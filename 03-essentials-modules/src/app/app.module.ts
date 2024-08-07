import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { TasksComponent } from "./tasks/tasks.component";
import { UserComponent } from "./user/user.component";
import { CardComponent } from "./shared/card/card.component";
import { TaskComponent } from "./tasks/task/task.component";
import { NewTaskComponent } from "./tasks/new-task/new-task.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardComponent,
    UserComponent,
    TaskComponent,
    TasksComponent,
    NewTaskComponent,
],
  bootstrap: [AppComponent],
  imports: [BrowserModule, FormsModule],
})
export class AppModule {}