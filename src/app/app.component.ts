import { Component } from '@angular/core';
import {AuthService} from './core/services/auth.service';
import {SessionService} from './core/services/session.service';
import {Router} from '@angular/router';
import { MatSnackBar } from "@angular/material";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private sessionService: SessionService,
    private route: Router,
    private snack: MatSnackBar
  ) {}

  get isSignedIn(): boolean {
    let verif =AuthService.isSignedIn;
    return verif;
  }

  get Accueil(): boolean {
    return this.route.url == '/auth/accueil';
  }

  signout(): void {
    AuthService.user = null;
    this.sessionService.clear();
    this.route.navigate(['/auth/signin']);
    this.snack.open('Disconnection.', 'Ok', {
      duration: 2500
    });
  }
  
  get isSensei(): boolean{
    return AuthService.isSensei;
  }
}
