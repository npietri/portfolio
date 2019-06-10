import { Component } from '@angular/core';
import { Compiler } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';

  isLoggedIn = false;

  receiveEvent($event) {
    this.isLoggedIn = $event;
    console.log(this.isLoggedIn);
  }
}
