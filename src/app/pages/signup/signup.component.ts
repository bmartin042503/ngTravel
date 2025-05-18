import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { User } from '../../shared/models/User';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatButtonModule,
    RouterLink
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  constructor (
    private router: Router,
    private authService: AuthService
  ) {}

  formErrorMessage = '';

  signUpForm = new FormGroup({
    name: new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(3)])
    }),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    passwordConfirm: new FormControl('', [Validators.required, Validators.minLength(8)])
  });

  signup() {
    const pass = this.signUpForm.get('password');
    const passConfirm = this.signUpForm.get('passwordConfirm');

    if(this.signUpForm.invalid) {
      this.formErrorMessage = "Kérlek tölts ki minden mezőt helyesen!";
      return;
    }

    if(pass?.value !== passConfirm?.value) {
      this.formErrorMessage = "A jelszavak nem egyeznek!";
      return;
    }

    const userData: Partial<User> = {
      name: {
        firstName: this.signUpForm.value.name?.firstName || '',
        lastName: this.signUpForm.value.name?.lastName || ''
      },
      email: this.signUpForm.value.email || '',
      transactions: [],
      tickets: []
    };

    const email = this.signUpForm.value.email || '';
    const password = this.signUpForm.value.password || '';

    this.authService.signUp(email, password, userData)
      .then(userCredential => {
        console.log("Sikeres regisztráció", userCredential.user);
        this.authService.updateLoginStatus(true);
        this.router.navigateByUrl("/home");
      })
      .catch(error => {
        console.error("Hiba történt a regisztráció során:", error);
        switch(error.code) {
          case 'auth/email-already-in-use':
            this.formErrorMessage = "Ez az email cím már használatban van";
            break;
          case 'auth/invalid-email':
            this.formErrorMessage = "Érvénytelen email cím";
            break;
          case 'auth/weak-password':
            this.formErrorMessage = "A jelszó túl gyenge. Legalább 8 karakter hosszúságúnak kell lennie";
            break;
          default:
            this.formErrorMessage = "Ismeretlen hiba történt!";
            break;
        }
      });
  }
}
