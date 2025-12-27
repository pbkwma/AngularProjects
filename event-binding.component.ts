import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {
message = "";

  showMessage() {
    this.message = "Button was clicked!";
  }

  typedText = "";

onKeyPress(event: any) {
  this.typedText = event.target.value;
}


}
