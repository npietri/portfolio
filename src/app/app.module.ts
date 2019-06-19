import {
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule,
  MatRadioModule,
  MatFormFieldModule,
  MatSelectModule,
  MatIconModule,
  MatToolbarModule,
  MatCardModule,
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatTableModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatSidenavModule,
  MatListModule,
  MatTabsModule,
  MatPaginatorModule,
  MatSortModule,
  ErrorStateMatcher,
  ShowOnDirtyErrorStateMatcher
} from "@angular/material";

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "./core/material.module";

import { AppComponent } from "./app.component";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FilterPipe } from "../app/core/pipes/filter.pipe";

import { AppRoutingModule, routingComponents } from "./app-routing.module";
import { HeaderComponent } from "./core/header/header.component";
import { SidenavComponent } from "./core/sidenav/sidenav.component";
import { HttpClientModule } from "@angular/common/http";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { FourOhFourComponent } from "./core/four-oh-four/four-oh-four.component";
import { PlayComponent } from "./mainpage/play/play.component";
import { EntrepriseComponent } from "./adminpage/entreprise/entreprise.component";
import { EntrepriseModifyComponent } from "./adminpage/entreprise/entreprise-modify/entreprise-modify.component";
import { ContactComponent } from "./mainpage/contact/contact.component";
import { DumbchoixComponent } from "./mainpage/contact/dumbchoix/dumbchoix.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    routingComponents,
    DashboardComponent,
    FourOhFourComponent,
    PlayComponent,
    EntrepriseComponent,
    FilterPipe,
    EntrepriseModifyComponent,
    ContactComponent,
    DumbchoixComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatListModule,
    FlexLayoutModule,
    MatTabsModule,
    MatSidenavModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule
  ],
  exports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatSidenavModule,
    MatMenuModule
  ],
  providers: [
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher },
    { provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: [] }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
