import { Component, OnInit, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBuilder, Validators, FormGroup, FormGroupDirective } from '@angular/forms';
import { Experience } from 'src/app/service/experience';
import { AdminService } from 'src/app/service/admin.service';
import { MatTableDataSource, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AdminComponent } from 'src/app/admin/admin.component';

@Component({
  selector: 'app-admin-add',
  templateUrl: './admin-add.component.html',
  styleUrls: ['./admin-add.component.css']
})
export class AdminAddComponent implements OnInit {

  dataSaved = false;
  experienceForm: FormGroup;
  experienceToUpdate: Experience;
  experienceIdUpdate;
  message = null;
  title: String = 'Ajouter une experience';

  constructor(
    private formbuilder: FormBuilder,
    private experienceService: AdminService,
    private dialogRef: MatDialogRef<AdminComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
    if (data != null && data.experienceToUpdate != null) {
      this.experienceToUpdate = data.experienceToUpdate;
      this.experienceIdUpdate = data.experienceToUpdate.id;
    }
  }

  ngOnInit() {
    // tslint:disable-next-line:max-line-length
    const priceRegex: RegExp = /^[0-9]*\.?[0-9]*$/;
    this.experienceForm = this.formbuilder.group({
      entreprise: ['', [Validators.required]],
      lieu: ['', [Validators.required]],
      date: ['', [Validators.required]],
      description: ['', [Validators.required]],

    });

    if (this.experienceToUpdate != null) {
      this.title = 'Modifier une experience';
      this.loadExperienceToEdit(this.experienceToUpdate);
    }
  }


  onFormSubmit() {
    this.dataSaved = false;
    const experience = this.experienceForm.value;
    this.createExperience(experience);
  }

  loadExperienceToEdit(experience: Experience) {
    this.message = null;
    this.dataSaved = null;
    this.experienceIdUpdate = experience.id;
    this.experienceForm.controls['name'].setValue(experience.entreprise);
    this.experienceForm.controls['lieu'].setValue(experience.lieu);
    this.experienceForm.controls['date'].setValue(experience.date);
    this.experienceForm.controls['description'].setValue(experience.description);
  }


  
  

  createExperience(experience: Experience) {
    if (this.experienceToUpdate == null) {
      this.experienceService.createExperience(experience).subscribe(
        data => {
          this.dataSaved = true;
          this.message = 'L experience a bien été ajoutée';
          this.closeForm();
        }
      );
    } else {
      experience.id = this.experienceIdUpdate;

      this.experienceService.updateExperience(experience).subscribe(
        () => {
          this.dataSaved = true;
          this.message = 'Lexperience à bien été modifiée';
          this.closeForm();
        },
        error => {
          console.log('Error', error);
        }
      );
    }
  }

  resetForm() {
    this.experienceForm.reset();
    this.experienceForm.markAsUntouched();
    this.message = null;
    this.dataSaved = false;
    this.experienceIdUpdate = null;
  }

  closeForm() {
    this.experienceForm.reset();
    this.experienceForm.markAsUntouched();
    this.dialogRef.close(this.message);
    this.message = null;
    this.experienceIdUpdate = null;
    this.dataSaved = false;
  }

}

