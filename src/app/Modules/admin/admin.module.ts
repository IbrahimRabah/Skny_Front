import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './Components/admin-dashboard/admin-dashboard.component';
import { ReportsComponent } from './Components/reports/reports.component';
import { NotificationsComponent } from './Components/notifications/notifications.component';
import { RequestsComponent } from './Components/requests/requests.component';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    AdminDashboardComponent,
    ReportsComponent,
    NotificationsComponent,
    RequestsComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports :[
    AdminDashboardComponent,
  ]
})
export class AdminModule { }
