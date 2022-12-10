import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserRegiComponent } from './user-regi/user-regi.component';
import { HttpClientModule } from '@angular/common/http';
import { UserLogiComponent } from './user-logi/user-logi.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserNavComponent } from './user-nav/user-nav.component';

let myRoute:Routes=[
  {
    path:"",
    component:AdminLoginComponent
  },
  {
    path:"adminLogin",
    component:AdminLoginComponent
  },
  {
    path:"userReg",
    component:UserRegiComponent
  },
  {
    path:"userLogin",
    component:UserLogiComponent
  },
  {
    path:"userProfile",
    component:UserProfileComponent
  }

]

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    UserRegiComponent,
    UserLogiComponent,
    UserProfileComponent,
    UserNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
