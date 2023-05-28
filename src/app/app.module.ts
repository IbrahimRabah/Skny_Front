import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './Modules/admin/admin.module';
import { AuthenticationModule } from './Modules/authentication/authentication.module';
import { HomeModule } from './Modules/home/home.module';
import { InformationModule } from './Modules/information/information.module';
import { ProfilesModule } from './Modules/profiles/profiles.module';
import { SharedModule } from './Modules/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    AdminModule,
    AuthenticationModule,
    HomeModule,
    InformationModule,
    ProfilesModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
