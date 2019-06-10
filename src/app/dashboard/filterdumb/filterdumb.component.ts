import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-filterdumb',
  templateUrl: './filterdumb.component.html',
  styleUrls: ['./filterdumb.component.css']
})
export class FilterdumbComponent implements OnInit {
  @Output()
  clickAction = new EventEmitter<boolean>();

  @Input()
  isDisabled = false;
  constructor() { }

  ngOnInit() {
  }

    un() {
    this.clickAction.emit(true);
  }

  deux() {
    this.clickAction.emit(false);
  }

}
