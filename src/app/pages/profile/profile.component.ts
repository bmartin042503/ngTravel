import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { EasydatePipe } from '../../shared/pipes/easydate.pipe';
import { User } from '../../shared/models/User';
import { Transaction } from '../../shared/models/Transaction';
import { UserService } from '../../services/user.service';
import { Ticket } from '../../shared/models/Ticket';
import { TicketService } from '../../services/ticket.service';

interface TicketWithRouteData extends Ticket {
  routeData: {
    departure: { location: string; time: string };
    arrival: { location: string; time: string };
    price: number;
  };
}

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
  tickets: TicketWithRouteData[] = [];
  loading: boolean = true;

  constructor(private userService: UserService, private ticketService: TicketService) {}

  ngOnInit() {
    this.userService.getUserProfile().subscribe(async data => {
      this.user = data.user;
      this.transactions = data.transactions;
      const enrichedTickets: TicketWithRouteData[] = [];

      for (const ticket of data.tickets) {
        if (ticket.status !== 'InCart') {
          const routeData = await this.ticketService.getRouteData(ticket.route);
          enrichedTickets.push({
            ...ticket,
            routeData
          });
        }
      }

      this.tickets = enrichedTickets;
      this.loading = false;
    });
  }
}