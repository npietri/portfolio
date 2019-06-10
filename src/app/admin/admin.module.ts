import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminAddComponent } from './admin-add/admin-add.component';

@NgModule({
  declarations: [AdminComponent, AdminAddComponent],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
