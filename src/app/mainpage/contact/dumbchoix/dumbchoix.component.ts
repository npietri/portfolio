import { Component, OnInit } from "@angular/core";
import { Input, Output, EventEmitter } from "@angular/core";
@Component({
  selector: "app-dumbchoix",
  templateUrl: "./dumbchoix.component.html",
  styleUrls: ["./dumbchoix.component.css"]
})
export class DumbchoixComponent implements OnInit {
  @Input() options: Array<any>;
  @Output() changedOption = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  select(option) {
    this.changedOption.emit(option);
  }
}
