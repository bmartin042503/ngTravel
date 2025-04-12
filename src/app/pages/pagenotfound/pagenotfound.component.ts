import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-pagenotfound',
  imports: [
    MatButtonModule
  ],
  templateUrl: './pagenotfound.component.html',
  styleUrl: './pagenotfound.component.scss'
})
export class PagenotfoundComponent {
  redirect() {
    window.location.href = "/home";
  }
}
