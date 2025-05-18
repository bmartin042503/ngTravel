export interface BusRoute {
    id: string;
    routeNumber: number;
    departure: {
        location: string;
        time: string;
    }
    arrival: {
        location: string;
        time: string;
    }
    seats: number;
    price: number;
}