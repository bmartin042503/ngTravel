import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { User } from '../../shared/models/User';

@Component({
  selector: 'app-signup',
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatButtonModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
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
      // TODO: részletesebb hiba megjelenítés, pl. jelszó milyen legyen stb.
      this.formErrorMessage = "Kérlek tölts ki minden mezőt helyesen!";
      return;
    }

    if(pass?.value !== passConfirm?.value) {
      this.formErrorMessage = "A jelszavak nem egyeznek!";
      return;
    }

    const registeredUser: User = {
      id: "0",
      name: {
        firstName: this.signUpForm.value.name?.firstName || '',
        lastName: this.signUpForm.value.name?.lastName || ''
      },
      email: this.signUpForm.value.email || '',
      password: this.signUpForm.value.password || '',
      tickets: []
    }
    this.formErrorMessage = "";
    localStorage.setItem("isLoggedIn", "true");
    console.log("Sikeres regisztráció!", registeredUser);
    window.location.href = "/home";
  }
}
