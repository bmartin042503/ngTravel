import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { BusRoute } from '../../shared/models/BusRoute';
import { ScheduleService } from '../../services/schedule.service';
import { ActivatedRoute } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-schedule',
  imports: [
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    RouterLink
  ],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.scss'
})
export class ScheduleComponent implements OnInit {
  scheduleTitle: string = '';

  routes: BusRoute[] = [];
  displayedColumns: string[] = [
    'route-number', 
    'departure', 
    'arrival', 
    'departure-time', 
    'arrival-time', 
    'seats', 
    'price',
  ];

  constructor(private scheduleService: ScheduleService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.scheduleService.getRoutes().subscribe((data) => {
      this.route.queryParams.subscribe(params => {
        const from = params['from'];
        const to = params['to'];

        if (from && to) {
          this.routes = data.filter(route => 
            route.departure.location.toLowerCase() === from.toLowerCase() &&
            route.arrival.location.toLowerCase() === to.toLowerCase()
          );
          this.scheduleTitle = from + " - " + to
        } else {
          this.routes = data;
        }
      });
    });
  }
}
