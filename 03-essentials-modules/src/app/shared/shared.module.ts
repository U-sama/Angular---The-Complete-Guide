import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { CardComponent } from "./card/card.component";

@NgModule({
  declarations: [
    CardComponent
],
  exports: [CardComponent],
})
export class SharedModule {}