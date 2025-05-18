import { Injectable } from '@angular/core';
import { doc, getDoc, addDoc, collection, updateDoc, deleteDoc, arrayRemove } from '@angular/fire/firestore';
import { Firestore, arrayUnion } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private firestore: Firestore) { }

  async addTicketToCart(userId: string, routeId: string): Promise<void> {
    const ticketRef = await addDoc(collection(this.firestore, 'Tickets'), {
      route: routeId,
      status: 'InCart'
    })

    const userDocRef = doc(this.firestore, 'Users', userId);
    await updateDoc(userDocRef, {
      tickets: arrayUnion(ticketRef.id)
    });
  }

  async removeTicketFromCart(userId: string, ticketId: string): Promise<void> {
    const ticketRef = doc(this.firestore, 'Tickets', ticketId);

    await deleteDoc(ticketRef);

    const userDocRef = doc(this.firestore, 'Users', userId);
    await updateDoc(userDocRef, {
      tickets: arrayRemove(ticketId)
    });
  }

  // mivel ez nem production, ezért csak simán gombnyomással meg lehet vásárolni a jegyeket, nincs valós fizetés
  async purchaseTickets(userId: string): Promise<void> {
  const userDocRef = doc(this.firestore, 'Users', userId);
  const userSnap = await getDoc(userDocRef);
  const userData = userSnap.data();

  if (!userData) {
    throw new Error('A felhasználó nem található!');
  }

  const ticketIds: string[] = userData['tickets'] || [];
  const updatedTickets: string[] = [];
  let totalPrice = 0;
  const routeDescriptions: string[] = [];

  for (const ticketId of ticketIds) {
    const ticketRef = doc(this.firestore, 'Tickets', ticketId);
    const ticketSnap = await getDoc(ticketRef);
    const ticketData = ticketSnap.data();

    if (!ticketData) continue;
    if (ticketData['status'] !== 'InCart') continue;

    const routeRef = doc(this.firestore, 'BusRoutes', ticketData['route']);
    const routeSnap = await getDoc(routeRef);
    const routeData = routeSnap.data();

    if (!routeData) continue;

    totalPrice += routeData['price'];
    updatedTickets.push(ticketId);

    const description = `(${routeData['departure'].location} -> ${routeData['arrival'].location})`;
    routeDescriptions.push(description);

    await updateDoc(ticketRef, { status: 'Ready' });
  }

  if (updatedTickets.length === 0) return;

  // tranzakció létrehozása a megvásárolt jegyek alapján + beleírja a tranzakció infójába hogy milyen járatokra vásárolt jegyet a felhasználó
  const info = `Vásárlás ${updatedTickets.length} jegyre\n` + routeDescriptions.join('\n');

  const transactionRef = await addDoc(collection(this.firestore, 'Transactions'), {
    timestamp: new Date().toISOString(),
    info,
    paidAmount: totalPrice
  });

  await updateDoc(userDocRef, {
      transactions: arrayUnion(transactionRef.id)
    });
  }

  async getRouteData(routeId: string): Promise<any> {
    const routeRef = doc(this.firestore, 'BusRoutes', routeId);
    const routeSnap = await getDoc(routeRef);
    return routeSnap.data();
  }
}
