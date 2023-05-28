import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AboutUsComponent,
    ContactUsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule

  ],
  exports: [
    AboutUsComponent,
    ContactUsComponent
  ],
})
export class InformationModule { }
