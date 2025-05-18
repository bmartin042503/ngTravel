import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { EasydatePipe } from '../../shared/pipes/easydate.pipe';
import { User } from '../../shared/models/User';
import { Transaction } from '../../shared/models/Transaction';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatListModule,
    EasydatePipe
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {
  user: User | null = null;
  transactions: Transaction[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUserProfile().subscribe(data => {
      this.user = data.user;
      this.transactions = data.transactions;
    });
  }
}