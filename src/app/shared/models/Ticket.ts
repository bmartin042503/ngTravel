import { BusRoute } from "./BusRoute";

export enum TicketStatus {
    InCart, // kosárban lévő buszjegy
    Ready, // felhasználásra váró buszjegy, vásárlás után (ez már le van foglalva)
    Used // felhasznált buszjegy
}

export interface Ticket {
    id: string;
    route: BusRoute;
    status: TicketStatus;
}