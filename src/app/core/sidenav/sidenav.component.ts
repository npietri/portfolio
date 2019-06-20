import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-sidenav",
  templateUrl: "./sidenav.component.html",
  styleUrls: ["./sidenav.component.css"]
})
export class SidenavComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();

  public entitiesLink: any[] = [
    { entity: "Admin", link: "login", icon: "people" },
    { entity: "Expériences", link: "experience", icon: "texture" },
    { entity: "Projets", link: "projets", icon: "texture" },
    { entity: "Langues", link: "langues", icon: "library_books" },
    { entity: "Contact", link: "contact", icon: "library_books" }
  ];
  constructor(private httpClient: HttpClient) {}

  ngOnInit() {}

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  };
}
