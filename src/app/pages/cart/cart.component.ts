import { Component, inject, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { Ticket } from '../../shared/models/Ticket';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';
import { TicketService } from '../../services/ticket.service';
import { CommonModule } from '@angular/common';
import { firstValueFrom } from 'rxjs';

interface TicketWithRouteData extends Ticket {
  routeData: {
    departure: { location: string },
    arrival: { location: string },
    price: number
  }
}

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule,
    ReactiveFormsModule,
    MatButtonModule,
    CommonModule
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
  private userService = inject(UserService);
  private authService = inject(AuthService);
  private ticketService = inject(TicketService);
  private router = inject(Router);

  ticketsInCart: TicketWithRouteData[] = [];
  userId: string = '';

  async ngOnInit() {
    const firebaseUser = await firstValueFrom(this.authService.currentUser);
    if (!firebaseUser) return;
    this.userId = firebaseUser.uid;

    this.userService.getUserProfile().subscribe(async data => {
      const inCartTickets = data.tickets.filter(t => t.status === 'InCart');

      const enrichedTickets: TicketWithRouteData[] = [];

      for (const ticket of inCartTickets) {
        const routeData = await this.ticketService.getRouteData(ticket.route);
        enrichedTickets.push({
          ...ticket,
          routeData
        });
      }

      this.ticketsInCart = enrichedTickets;
    });
  }

  async removeTicket(ticket: TicketWithRouteData) {
    await this.ticketService.removeTicketFromCart(this.userId, ticket.id);
    this.ticketsInCart = this.ticketsInCart.filter(t => t.id !== ticket.id);
  }

  goToPayment() {
    this.router.navigate(['/payment']);
  }
}