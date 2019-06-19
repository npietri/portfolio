import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MainpageRoutingModule } from "./mainpage-routing.module";
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { LanguesComponent } from './langues/langues.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

@NgModule({
  declarations: [EducationComponent, SkillsComponent, LanguesComponent, ContactComponent, PortfolioComponent],
  imports: [CommonModule, MainpageRoutingModule]
})
export class MainpageModule {}
