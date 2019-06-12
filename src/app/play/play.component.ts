import { Component, OnInit } from '@angular/core';
import { PlayService } from '../service/play.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {
  
  profils: Object;

  constructor(private data: PlayService) {
    this.users.push({ nom: "jean" })
    this.users.push({ nom: "julie" })
    this.users.push({ nom: "paul" })
  }

  ngOnInit() {
    this.data.getProfils().subscribe(data => {
      this.profils = data
      console.log(this.users);
    }
    );
  }


  title = 'ExoCampusID ';
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

}
