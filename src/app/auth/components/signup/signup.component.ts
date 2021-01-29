import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {AuthService} from '../../../core/services/auth.service';
import {User} from '../../../core/entities/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signUp',
  templateUrl: './signUp.component.html',
  styleUrls: ['./signUp.component.scss']
})
export class signUpComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) { }

  userForm = this.fb.group({
    first_name: [null, [Validators.required]],
    last_name: [null, [Validators.required]],
    email: [null, [Validators.required, Validators.email]],
    password: ['password', [Validators.required, Validators.minLength(6)]],
  });

  ngOnInit() {
  }

  signUp() {
    const newUser = new User(this.userForm.getRawValue());
    this.authService.signUp(newUser).subscribe(
      () => {
        // inscription réussie !
        this.authService.signIn(newUser.email, newUser.password).subscribe(
          () => {
            this.router.navigate(['dash/home']);
          }, () => {
          }
        );

      }, (err) => {
        // afficher ici les erreurs de type duplicata
      }
    );

  }

}
