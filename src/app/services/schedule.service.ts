import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BusRoute } from '../shared/models/BusRoute';
import { SCHEDULE_DATA } from '../shared/constants/busroutes';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor() { }

  getRoutes(): Observable<BusRoute[]> {
    return of(SCHEDULE_DATA);
  }
}
