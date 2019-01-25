import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';

import { AppComponent } from './app.component';
import { GamerListComponent } from './gamers/gamer-list.component';
import { CreateGamerComponent } from './gamers/create-gamer.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './register/sign-up.component';
import { ConfirmPasswordValidatorDirective } from './shared/confirm-password-validator.directive';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: SignUpComponent },
  { path: 'list', component: GamerListComponent },
  { path: 'create', component: CreateGamerComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    GamerListComponent,
    CreateGamerComponent,
    LoginComponent,
    SignUpComponent,
    ConfirmPasswordValidatorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
