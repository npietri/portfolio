import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainpageRoutingModule } from './mainpage-routing.module';
import { ExperienceproComponent } from './experiencepro/experiencepro.component';

@NgModule({
  declarations: [ExperienceproComponent],
  imports: [
    CommonModule,
    MainpageRoutingModule
  ]
})
export class MainpageModule { }
