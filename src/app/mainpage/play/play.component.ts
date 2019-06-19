import { Component, OnInit } from "@angular/core";
import { PlayService } from "../../core/service/play.service";

@Component({
  selector: "app-play",
  templateUrl: "./play.component.html",
  styleUrls: ["./play.component.css"]
})
export class PlayComponent implements OnInit {
  profils: Object;

  constructor(private data: PlayService) {
    this.users.push({ nom: "jean" });
    this.users.push({ nom: "julie" });
    this.users.push({ nom: "paul" });
  }

  ngOnInit() {
    this.data.getProfils().subscribe(data => {
      this.profils = data;
      console.log(this.users);
    });
  }

  title = "ExoCampusID ";
  nombre: number = 10;
  bool: boolean = true;
  obj: {} = {
    cle: "ma cle"
  };

  public users: Array<{ nom }> = [];

  square(nbr: number): number {
    return nbr * nbr;
  }
  color: string = "red";

  /*isClicked(event : Event):void{
    console.log("ca marche");
  }*/
  changeColor(color: string): void {
    this.color = color;
  }

  public content: string = "";

  public display: boolean = true;

  public carreColor: string = "";

  ////////Pipes//////////

  birthday = new Date(1983, 7, 29);
  francaisFormat = "d MMMM y";
  americanFormat = "MMMM d, y";
  toggle = true; // format britannique par défaut

  get format() {
    return this.toggle ? this.americanFormat : this.francaisFormat;
  }

  toggleFormat() {
    this.toggle = !this.toggle;
  }

  eleves = ["Aymen", "Anthony", "Dorian", "Anna", "Nico", "Martin", "Moi"];
}
