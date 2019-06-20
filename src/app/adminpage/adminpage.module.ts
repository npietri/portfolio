import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AdminpageRoutingModule } from "./adminpage-routing.module";
import { EntrepriseComponent } from "./entreprise/entreprise.component";
import { LoginComponent } from "./login/login.component";

@NgModule({
  declarations: [EntrepriseComponent, LoginComponent],
  imports: [CommonModule, AdminpageRoutingModule]
})
export class AdminpageModule {}
