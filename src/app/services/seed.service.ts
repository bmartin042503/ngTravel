import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

// egy seedservice, ami csak arra használható, hogy a busroutes collectiont feltöltse fiktív járatokkal
// hogy ne kelljen egyesével létrehozni sokat

@Injectable({
  providedIn: 'root'
})
export class SeedService {

  constructor(private firestore: Firestore) {}

  async seedBusRoutes(count: number = 100): Promise<void> {
    const locations = ['Budapest', 'Miskolc', 'Debrecen', 'Szeged', 'Pécs', 'Győr', 'Szolnok', 'Eger', 'Kecskemét', 'Veszprém'];
    const startDate = new Date('2025-05-18T06:00:00');

    for (let i = 0; i < count; i++) {
      const fromIndex = Math.floor(Math.random() * locations.length);
      let toIndex = Math.floor(Math.random() * locations.length);
      while (toIndex === fromIndex) {
        toIndex = Math.floor(Math.random() * locations.length);
      }

      const departureLocation = locations[fromIndex];
      const arrivalLocation = locations[toIndex];

      const departureTime = new Date(startDate);
      departureTime.setDate(startDate.getDate() + Math.floor(i / 10));
      departureTime.setHours(6 + (i % 10));

      const travelDurationHours = Math.floor(Math.random() * 4) + 1;
      const arrivalTime = new Date(departureTime);
      arrivalTime.setHours(arrivalTime.getHours() + travelDurationHours);

      const route = {
        routeNumber: 1000 + i,
        departure: {
          location: departureLocation,
          time: departureTime.toISOString()
        },
        arrival: {
          location: arrivalLocation,
          time: arrivalTime.toISOString()
        },
        seats: Math.floor(Math.random() * 20) + 30,
        price: Math.floor(Math.random() * 2000) + 2000
      };

      await addDoc(collection(this.firestore, 'BusRoutes'), route);
    }

    console.log(`${count} BusRoute feltöltve.`);
  }
}