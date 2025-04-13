import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { USERS } from '../../shared/constants/users';
import { User } from '../../shared/models/User';
import { EasydatePipe } from '../../shared/pipes/easydate.pipe';

@Component({
  selector: 'app-profile',
  imports: [
    MatCardModule,
    MatButtonModule,
    MatListModule,
    EasydatePipe
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  usersData = USERS;
}
