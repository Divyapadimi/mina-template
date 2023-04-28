import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { AppsComponent } from './pages/apps/apps.component';
import { ChartsComponent } from './pages/charts/charts.component';
import { ComponentsComponent } from './pages/components/components.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FormsComponent } from './pages/forms/forms.component';
import { PagesComponent } from './pages/pages/pages.component';
import { ConfirmationComponent } from './pages/steps/confirmation/confirmation.component';
import { PaymentComponent } from './pages/steps/payment/payment.component';
import { PersonalInformationComponent } from './pages/steps/personal-information/personal-information.component';
import { SeatComponent } from './pages/steps/seat/seat.component';
import { TableComponent } from './pages/table/table.component';

;

const routes: Routes = [
  {path:'Dashboard',component:DashboardComponent},
  {path:'Apps',component:AppsComponent},
  {path:'charts',component:ChartsComponent},
  {path:'forms',component:FormsComponent},
  {path:'file-upload',component:FileUploadComponent},
  {path:'components',component:ComponentsComponent},
  {path:'pages',component:PagesComponent},
  {path:'table',component:TableComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


export const myRoutings=[
  DashboardComponent,
  AppsComponent,
  PagesComponent,
  ChartsComponent,
  FormsComponent,
  FileUploadComponent,
  ComponentsComponent

  
]