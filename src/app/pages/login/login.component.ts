import { Component, OnDestroy } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnDestroy {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  email = new FormControl('', [Validators.email, Validators.required]);
  password = new FormControl('', [Validators.minLength(8), Validators.required]);
  formErrorMessage: string = '';
  authSubscription?: Subscription;

  login() {
    if(this.email.invalid) {
      this.formErrorMessage = "Kérlek adj meg egy megfelelő email címet";
      return;
    }
    if(this.password.invalid) {
      this.formErrorMessage = "A jelszónak legalább 8 karakter hosszúnak kell lennie";
      return;
    }

    this.authService.signIn(this.email.value || '', this.password.value || '')
      .then(userCredential => {
        console.log("Sikeres bejelentkezés", userCredential.user);
        this.authService.updateLoginStatus(true);
        this.router.navigateByUrl('/home');
      })
      .catch(error => {
        console.error('Hiba történt a bejelentkezés során: ', error)
        switch (error.code) {
          case 'auth/user-not-found':
          case 'auth/wrong-password':
          case 'auth/invalid-credential':
            this.formErrorMessage = "Helytelen email vagy jelszó"
            break;
          default:
            this.formErrorMessage = "Ismeretlen hiba történt"
        }
      })
  }

  ngOnDestroy() {
    this.authSubscription?.unsubscribe();
  }
}
