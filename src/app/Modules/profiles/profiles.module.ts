import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnerProfileComponent } from './Components/owner-profile/OwnerProfile/owner-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    OwnerProfileComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    OwnerProfileComponent
  ],
})
export class ProfilesModule { }
