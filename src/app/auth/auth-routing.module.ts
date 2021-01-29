import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import {signInComponent} from './components/signIn/signIn.component';
import {signUpComponent} from './components/signUp/signUp.component';

const routes: Routes = [
  {
    path: 'signIn', component: signInComponent,
  },
  {
    path: 'signUp', component: signUpComponent,
  },
  {
    path: 'accueil', component: AccueilComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
