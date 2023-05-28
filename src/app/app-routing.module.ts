import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Modules/home/Components/home/home.component';
import { AllApartmentsComponent } from './Modules/home/Components/all-apartments/all-apartments.component';
import { SingleApartmentComponent } from './Modules/home/Components/single-apartment/single-apartment.component';
import { RegistrationComponent } from './Modules/authentication/Components/registration/registration.component';
import { LoginComponent } from './Modules/authentication/Components/login/login.component';
import { LogoutComponent } from './Modules/authentication/Components/logout/logout.component';
import { AboutUsComponent } from './Modules/information/Components/about-us/about-us.component';
import { ContactUsComponent } from './Modules/information/Components/contact-us/contact-us.component';
import { OwnerProfileComponent } from './Modules/profiles/Components/owner-profile/OwnerProfile/owner-profile.component';
import { AdminDashboardComponent } from './Modules/admin/Components/admin-dashboard/admin-dashboard.component';
import { ReportsComponent } from './Modules/admin/Components/reports/reports.component';
import { RequestsComponent } from './Modules/admin/Components/requests/requests.component';
import { NotificationsComponent } from './Modules/admin/Components/notifications/notifications.component';

const routes: Routes = [
  { path: '', redirectTo: "Home", pathMatch: 'full' },

  { path: "Home", component:HomeComponent},
  { path: "AllApartments",component:AllApartmentsComponent},
  { path:"SingleApartment",component:SingleApartmentComponent},

  { path:"Registeration",component:RegistrationComponent},
  { path:"Login",component:LoginComponent},
  { path:"Logout",component:LogoutComponent},

  { path:"OwnerProfile",component:OwnerProfileComponent},

  { path: "Dashboard", component:AdminDashboardComponent,
    children:
      [
        { path: "Notifications", component:NotificationsComponent },
        { path: "Requests", component: RequestsComponent },
        { path: "Reports", component:ReportsComponent }
      ]
  },

  { path: "AboutUs", component: AboutUsComponent },
  { path: "ContactUs", component:ContactUsComponent },


  { path: '**', redirectTo: 'Home', pathMatch: 'full' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
