import { Component, computed, Input, signal, input, Output, EventEmitter, output } from '@angular/core';
import { CardComponent } from "../shared/card/card.component";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // Decorator Input
  // @Input({required:true}) Id!: string;
  // @Input({required:true}) avatar!: string;
  // @Input({required:true}) name!: string;
  @Input({required:true}) user!: {
    id : string,
    avatar : string,
    name : string
  };
  @Input({required:true}) selected! : boolean;
  //@Output() select = new EventEmitter();
  select = output<string>()

  get imagepath(){
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser(){
    this.select.emit(this.user.id);
  }
}
