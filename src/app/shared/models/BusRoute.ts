export interface BusRoute {
    id: number;
    departure: string;
    arrival: string;
    departureTime: Date;
    arrivalTime: Date;
    seats: number;
    availableSeats: number;
    price: number;
    premiumPrice: number;
}