import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './Components/registration/registration.component';
import { LoginComponent } from './Components/login/login.component';
import { LogoutComponent } from './Components/logout/logout.component';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';



@NgModule({
  declarations: [
    RegistrationComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink
  ],
  exports :[
    RegistrationComponent,
    LoginComponent,
    LogoutComponent
  ]
})
export class AuthenticationModule { }
