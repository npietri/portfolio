import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// COMPONENTS
import { HomeComponent } from "./mainpage/home/home.component";
import { LoginComponent } from "./adminpage/login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { FilterdumbComponent } from "./dashboard/filterdumb/filterdumb.component";
import { TabledumbComponent } from "./dashboard/tabledumb/tabledumb.component";
import { FourOhFourComponent } from "./core/four-oh-four/four-oh-four.component";
import { PlayComponent } from "./mainpage/play/play.component";
import { EntrepriseComponent } from "./adminpage/entreprise/entreprise.component";
import { EntrepriseModifyComponent } from "./adminpage/entreprise/entreprise-modify/entreprise-modify.component";
import { ContactComponent } from "./mainpage/contact/contact.component";

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  },

  {
    path: "d",
    component: DashboardComponent
  },
  {
    path: "play",
    component: PlayComponent
  },
  {
    path: "entreprise",
    component: EntrepriseComponent
  },

  {
    path: "contact",
    component: ContactComponent
  },

  /////// lazyloading du module Admin////

  {
    path: "login",
    loadChildren: "./adminpage/adminpage.module#AdminpageModule"
  },

  { path: "not-found", component: FourOhFourComponent },
  { path: "**", redirectTo: "not-found" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [
  HomeComponent,
  LoginComponent,
  DashboardComponent,
  FilterdumbComponent,
  TabledumbComponent
];
