import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLogged = true;

  @Output() eventClick = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

  sendEvent() {
    this.eventClick.emit(this.isLogged);
  }

}
