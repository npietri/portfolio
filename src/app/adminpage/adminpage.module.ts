import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AdminpageRoutingModule } from "./adminpage-routing.module";
import { EntrepriseComponent } from "./entreprise/entreprise.component";

@NgModule({
  declarations: [EntrepriseComponent],
  imports: [CommonModule, AdminpageRoutingModule]
})
export class AdminpageModule {}
