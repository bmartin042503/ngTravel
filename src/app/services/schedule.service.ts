import { Injectable } from '@angular/core';
import { Firestore, collection, getDocs, getDoc, doc, query, where } from '@angular/fire/firestore'; 
import { BusRoute } from '../shared/models/BusRoute';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private firestore: Firestore) { }

  async getAllRoutes(): Promise<BusRoute[]> {
    const routesRef = collection(this.firestore, 'BusRoutes');
    const snapshot = await getDocs(routesRef);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as BusRoute));
  }

  // elérhető férőhelyek visszaadása
  // a járatra jegyett váltott felhasználók és a járat férőhelye alapján
  async getAvailableSeatsForRoute(routeId: string) : Promise<number> {
    const routeRef = doc(this.firestore, 'BusRoutes', routeId);
    const routeSnap = await getDoc(routeRef);

    if(!routeSnap.exists()) {
      throw new Error("A megadott járat nem létezik");
    }

    const routeData = routeSnap.data();
    const totalSeats = routeData['seats'];

    const ticketsRef = collection(this.firestore, 'Tickets');
    const q = query(
      ticketsRef,
      where('route', '==', routeId),
      where('status', '==', 'Ready')
    );
    const ticketSnap = await getDocs(q);
    const bookedSeats = ticketSnap.size;

    return totalSeats - bookedSeats;
  }
}
