import { Component, OnInit, Inject } from "@angular/core";
import { Observable } from "rxjs";
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormGroupDirective
} from "@angular/forms";
import {
  MatTableDataSource,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material";
import { EntrepriseComponent } from "src/app/adminpage/entreprise/entreprise.component";
import { Experiencepro } from "../../../core/service/experiencepro";
import { ExperienceproService } from "../../../core/service/experiencepro.service";

@Component({
  selector: "app-entreprise-modify",
  templateUrl: "./entreprise-modify.component.html",
  styleUrls: ["./entreprise-modify.component.css"]
})
export class EntrepriseModifyComponent implements OnInit {
  // dataSaved = false;
  // experienceproForm: FormGroup;
  // message = null;
  // title: String = "Ajouter une expérience";
  // entrepriseToUpdate: Experiencepro;
  // entrepriseproIdUpdate;

  //constructor(
  //   private formbuilder: FormBuilder,
  //   private experienceproService: ExperienceproService,
  //   private dialogRef: MatDialogRef<EntrepriseComponent>,
  //   @Inject(MAT_DIALOG_DATA) data
  // ) {
  //   if (data != null && data.experienceproToUpdate != null) {
  //     this.entrepriseToUpdate = data.entrepriseToUpdate;
  //     this.entrepriseproIdUpdate = data.entrepriserproToUpdate.id;
  //   }
  // }

  ngOnInit() {
    //   this.experienceproForm = this.formbuilder.group({
    //     // id: ["", [Validators.required]],
    //     nom: ["", [Validators.required]],
    //     date: ["", [Validators.required]],
    //     description: ["", [Validators.required]]
    // });
    //   if (this.entrepriseToUpdate != null) {
    //     this.title = "Modifier une entreprise";
    //     this.loadEntrepriseToEdit(this.entrepriseToUpdate);
    //   }
    // }
    // loadEntrepriseToEdit(experiencepro: Experiencepro) {
    //   this.message = null;
    //   this.dataSaved = null;
    //   this.experienceproForm.controls["nom"].setValue(experiencepro.nom);
    //   this.experienceproForm.controls["date"].setValue(experiencepro.date);
    //   this.experienceproForm.controls["description"].setValue(
    //     experiencepro.description
    //   );
  }

  // closeForm() {
  //   this.experienceproForm.reset();
  //   this.experienceproForm.markAsUntouched();
  //   this.dialogRef.close(this.message);
  //   this.message = null;
  //   this.entrepriseproIdUpdate = null;
  //   this.dataSaved = false;
  // }
}
