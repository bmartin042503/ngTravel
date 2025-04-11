import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { BusRoute } from '../../shared/models/BusRoute';
import { ScheduleService } from '../../services/schedule.service';

@Component({
  selector: 'app-schedule',
  imports: [
    MatTableModule
  ],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.scss'
})
export class ScheduleComponent implements OnInit {
  routes: BusRoute[] = [];
  displayedColumns: string[] = [
    'departure',
    'arrival',
    'departure-time',
    'arrival-time',
    'seats',
    'price'
  ];

  constructor(private scheduleService: ScheduleService) {}

  ngOnInit(): void {
    this.scheduleService.getRoutes().subscribe((data) => {
      this.routes = data;
    });
  }
}
