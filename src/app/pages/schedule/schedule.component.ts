import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { BusRoute } from '../../shared/models/BusRoute';
import { ScheduleService } from '../../services/schedule.service';
import { ActivatedRoute } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { EasydatePipe } from '../../shared/pipes/easydate.pipe';
import { NgClass } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { TicketService } from '../../services/ticket.service';
import { AuthService } from '../../services/auth.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-schedule',
  imports: [
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    EasydatePipe,
    NgClass,
    MatTooltipModule
  ],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.scss'
})
export class ScheduleComponent implements OnInit {
  scheduleTitle: string = '';
  routes: (BusRoute & { availableSeats: number })[] = [];
  displayedColumns: string[] = [
    'route-number', 
    'departure', 
    'arrival', 
    'departure-time', 
    'arrival-time', 
    'seats', 
    'price',
  ];
  loading: boolean = true;

  constructor(
    private scheduleService: ScheduleService, 
    private route: ActivatedRoute,
    private ticketService: TicketService,
    private authService: AuthService,
    private snackBar: MatSnackBar
  ) {}

  async addToCart(route: BusRoute & { availableSeats: number }) {
    if (route.availableSeats > 0 && !this.isExpired(route)) {
      try {
        const user = await firstValueFrom(this.authService.currentUser);
        if (!user) {
          throw new Error('Nincs bejelentkezett felhasználó.');
        }
        await this.ticketService.addTicketToCart(user.uid, route.id!);
        this.snackBar.open('Sikeresen hozzáadva a kosárhoz', 'Bezár', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom'
        });
      } catch (error) {
        console.error('Hiba a kosárhoz adáskor:', error);
      }
    }
  }

  async ngOnInit() {
    const allRoutes = await this.scheduleService.getAllRoutes();

    const routesWithSeats = await Promise.all(
      allRoutes.map(async route => {
        const availableSeats = await this.scheduleService.getAvailableSeatsForRoute(route.id!);
        return { ...route, availableSeats };
      })
    );

    this.loading = false;

    this.route.queryParams.subscribe(params => {
      const from = params['from'];
      const to = params['to'];

      if (from && to) {
        this.routes = routesWithSeats.filter(route => 
          route.departure.location.toLowerCase() === from.toLowerCase() &&
          route.arrival.location.toLowerCase() === to.toLowerCase()
        );
        this.scheduleTitle = `${from} - ${to}`;
      } else {
        this.routes = routesWithSeats;
      }
    });
  }

  isExpired(route: BusRoute): boolean {
    return new Date() > new Date(route.departure.time);
  }

  isNoAvailableSeats(route: BusRoute & { availableSeats: number }): boolean {
    return route.availableSeats === 0;
  }
}