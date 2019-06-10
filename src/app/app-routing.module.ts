import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// COMPONENTS
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AdminAddComponent } from './admin/admin-add/admin-add.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FilterdumbComponent } from './dashboard/filterdumb/filterdumb.component';
import { TabledumbComponent } from './dashboard/tabledumb/tabledumb.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'admin-add',
    component: AdminAddComponent,
  },
  {
    path: 'd',
    component: DashboardComponent,
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  HomeComponent,
  LoginComponent,
  AdminComponent,
  AdminAddComponent,
  DashboardComponent,
  FilterdumbComponent,
  TabledumbComponent,

  ];



