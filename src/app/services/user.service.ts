import { Injectable } from '@angular/core';
import { Firestore, doc, getDoc, collection, query, where, getDocs, documentId } from '@angular/fire/firestore';
import { Observable, from, of } from 'rxjs';
import { AuthService } from './auth.service';
import { switchMap } from 'rxjs/operators';
import { User } from '../shared/models/User';
import { Transaction } from '../shared/models/Transaction';
import { Ticket } from '../shared/models/Ticket';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private firestore: Firestore,
    private authService: AuthService
  ) { }

  getUserProfile(): Observable<{
    user: User | null,
    transactions: Transaction[],
    tickets: Ticket[]
  }> {
    return this.authService.currentUser.pipe(
      switchMap(authUser => {
        if (!authUser) {
          return of({
            user: null,
            transactions: [],
            tickets: []
          });
        }
        return from(this.fetchUserData(authUser.uid))
      })
    );
  }

  private async fetchUserData(userId: string): Promise<{
    user: User | null,
    transactions: Transaction[],
    tickets: Ticket[]
  }> {
    try {
      const userDocRef = doc(this.firestore, 'Users', userId);
      const userSnapshot = await getDoc(userDocRef);

      if (!userSnapshot.exists) {
        return {
          user: null,
          tickets: [],
          transactions: []
        }
      }

      const userData = userSnapshot.data() as User;
      const user = { ...userData, id: userId };

      // tranzakciók lekérése
      const transactions: Transaction[] = [];
      if(user.transactions && user.transactions.length > 0) {
        const transactionCollection = collection(this.firestore, 'Transactions');
        const q = query(transactionCollection, where(documentId(), 'in', user.transactions));
        const transactionsSnapshot = await getDocs(q);

        transactionsSnapshot.forEach(doc => {
          transactions.push({ ...doc.data(), id: doc.id } as Transaction);
        });
      }

      // jegyek lekérése
      const tickets: Ticket[] = [];
      if(user.tickets && user.tickets.length > 0) {
        const ticketCollection = collection(this.firestore, 'Tickets');
        const q = query(ticketCollection, where(documentId(), 'in', user.tickets));
        const ticketsSnapshot = await getDocs(q);

        ticketsSnapshot.forEach(doc => {
          tickets.push({ ...doc.data(), id: doc.id } as Ticket);
        });
      }

      return {
        user,
        transactions,
        tickets
      };

    } catch(error) {
      console.error("Hiba történt a felhasználó adatok lekérése során:", error);
      return {
        user: null,
        tickets: [],
        transactions: []
      }
    }
  }
}
