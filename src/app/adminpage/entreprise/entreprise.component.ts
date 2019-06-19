import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormGroupDirective
} from "@angular/forms";
import { MatTableDataSource } from "@angular/material";
import { MatDialog, MatDialogConfig } from "@angular/material";

import { Experiencepro } from "src/app/core/service/experiencepro";
import { ExperienceproService } from "src/app/core/service/experiencepro.service";
//import { EntrepriseAddComponent } from ; à faire

@Component({
  selector: "app-entreprise",
  templateUrl: "./entreprise.component.html",
  styleUrls: ["./entreprise.component.css"]
})
export class EntrepriseComponent implements OnInit {
  dataSaved = false;
  message = null;

  // Table

  public displayedColumns = ["id", "nom", "date", "description"];
  dataSource = new MatTableDataSource<Experiencepro>();

  constructor(
    private formbuilder: FormBuilder,
    private experienceproService: ExperienceproService //private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.loadAllEntreprises();
  }

  // openDialog(experiencepro: Experiencepro = null) {
  //   const dialogConfig = new MatDialogConfig();

  //   dialogConfig.disableClose = false;
  //   dialogConfig.autoFocus = true;

  //   if (experiencepro != null) {
  //     dialogConfig.data = {
  //       experienceproToUpdate: experiencepro
  //     };
  //   }

  //   const dialogRef = this.dialog.open(entrepriseAddComponent, dialogConfig);

  //   dialogRef.afterClosed().subscribe(data => {
  //     this.loadAllEntreprises();

  //     if (data != null) {
  //       this.message = data;
  //     }
  //   });
  // }

  loadAllEntreprises() {
    //double appel... pas gégé
    this.experienceproService.getAllEntreprises().subscribe(entreprises => {
      this.dataSource.data = entreprises as Experiencepro[];
    });
  }

  // loadEntrepriseToEdit(experiencepro: Experiencepro) {
  //   this.message = null;
  //   this.dataSaved = null;
  //   this.openDialog(experiencepro);
  // }

  deleteEntreprise(entrepriseId: number) {
    if (confirm("Voulez-vous vraiment supprimer cette entreprise ?")) {
      this.experienceproService.deleteEntreprise(entrepriseId).subscribe(() => {
        this.dataSaved = true;
        this.message = "L'entreprise à bien été supprimée";
        this.loadAllEntreprises();
      });
    }
  }
}
