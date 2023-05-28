import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './Components/home/home.component';
import { AllApartmentsComponent } from './Components/all-apartments/all-apartments.component';
import { SingleApartmentComponent } from './Components/single-apartment/single-apartment.component';
import { RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    HomeComponent,
    AllApartmentsComponent,
    SingleApartmentComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    HttpClientModule
  ],
  exports: [
    HomeComponent,
    AllApartmentsComponent,
    SingleApartmentComponent
  ]
})
export class HomeModule { }
