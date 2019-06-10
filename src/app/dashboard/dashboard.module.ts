import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { FilterdumbComponent } from './filterdumb/filterdumb.component';
import { TabledumbComponent } from './tabledumb/tabledumb.component';

@NgModule({
  declarations: [DashboardComponent, FilterdumbComponent, TabledumbComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
