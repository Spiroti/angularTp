import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { signInComponent } from './components/signIn/signIn.component';
import {AuthRoutingModule} from './auth-routing.module';
import { signUpComponent } from './components/signUp/signUp.component';
import {UserPartsModule} from '../shared/user-parts/user-parts.module';
import {SharedModule} from '../shared/shared.module';
import { AccueilComponent } from './components/accueil/accueil.component';



@NgModule({
  declarations: [signInComponent, signUpComponent, AccueilComponent],
  imports: [
    SharedModule,
    AuthRoutingModule,
    UserPartsModule
  ]
})
export class AuthModule { }
