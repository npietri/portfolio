import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { EntrepriseComponent } from "./entreprise/entreprise.component";
import { EntrepriseModifyComponent } from "./entreprise/entreprise-modify/entreprise-modify.component";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "entreprise",
    component: EntrepriseComponent
  },
  {
    path: "entreprise-modify",
    component: EntrepriseModifyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminpageRoutingModule {}
