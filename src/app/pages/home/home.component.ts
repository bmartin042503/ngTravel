import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { SCHEDULE_DATA } from '../../shared/constants';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [
    MatButtonModule, 
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    RouterModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  isLoggedIn = false;

  locationFrom = new FormControl('');
  locationTo = new FormControl('');

  locations: string[] = [];

  constructor(private router: Router) {
    const cities = SCHEDULE_DATA.flatMap(route => [
      route.departure.location,
      route.arrival.location
    ]);
    this.locations = Array.from(new Set(cities));
  }

  search() {
    console.log("keresés..");
    const from = this.locationFrom.value;
    const to = this.locationTo.value;
    if(from && to) {
      console.log("lefutok");
      this.router.navigate(['/schedule'], {
        queryParams: { from, to }
      });
    }
  }

  ngOnInit(): void {
    console.log("home inicializálva");
    this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  }
}
