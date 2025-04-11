export interface BusRoute {
    id: string;
    routeNumber: number;
    departure: {
        location: string;
        time: Date;
    }
    arrival: {
        location: string;
        time: Date;
    }
    seats: {
        total: number;
        reserved: number;
    }
    price: number;
}