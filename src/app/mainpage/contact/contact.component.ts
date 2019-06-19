import { Component, OnInit } from "@angular/core";
import { DumbchoixComponent } from "./dumbchoix/dumbchoix.component";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"]
})
export class ContactComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  optionsArr = [
    "Téléphone : 06 28 21 29 85",
    "email : nicolaspietri.fr@gmail.com"
  ];
  choix = "";

  onOptionChange(change: string) {
    this.choix = change;
  }
}
