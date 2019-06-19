import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminpageRoutingModule } from './adminpage-routing.module';
import { ExperienceproComponent } from './experiencepro/experiencepro.component';

@NgModule({
  declarations: [ExperienceproComponent],
  imports: [
    CommonModule,
    AdminpageRoutingModule
  ]
})
export class AdminpageModule { }
