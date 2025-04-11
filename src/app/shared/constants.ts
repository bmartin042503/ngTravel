import { BusRoute } from "./models/BusRoute";

export const SCHEDULE_DATA: BusRoute[] = [
  {
    id: 1,
    departure: 'Budapest',
    arrival: 'Debrecen',
    departureTime: new Date('2025-04-12T08:00:00'),
    arrivalTime: new Date('2025-04-12T11:00:00'),
    seats: 40,
    availableSeats: 40,
    price: 4500,
    premiumPrice: 6200
  },
  {
    id: 2,
    departure: 'Budapest',
    arrival: 'Szeged',
    departureTime: new Date('2025-04-12T09:30:00'),
    arrivalTime: new Date('2025-04-12T12:00:00'),
    seats: 45,
    availableSeats: 12,
    price: 3900,
    premiumPrice: 5100
  },
  {
    id: 3,
    departure: 'Debrecen',
    arrival: 'Miskolc',
    departureTime: new Date('2025-04-12T07:15:00'),
    arrivalTime: new Date('2025-04-12T08:45:00'),
    seats: 30,
    availableSeats: 20,
    price: 2800,
    premiumPrice: 3900
  },
  {
    id: 4,
    departure: 'Pécs',
    arrival: 'Győr',
    departureTime: new Date('2025-04-12T10:00:00'),
    arrivalTime: new Date('2025-04-12T14:30:00'),
    seats: 50,
    availableSeats: 18,
    price: 5600,
    premiumPrice: 7100
  },
  {
    id: 5,
    departure: 'Miskolc',
    arrival: 'Szeged',
    departureTime: new Date('2025-04-12T06:45:00'),
    arrivalTime: new Date('2025-04-12T11:15:00'),
    seats: 40,
    availableSeats: 5,
    price: 6100,
    premiumPrice: 7600
  },
  {
    id: 6,
    departure: 'Szeged',
    arrival: 'Pécs',
    departureTime: new Date('2025-04-12T13:00:00'),
    arrivalTime: new Date('2025-04-12T17:30:00'),
    seats: 35,
    availableSeats: 10,
    price: 5900,
    premiumPrice: 7300
  },
  {
    id: 7,
    departure: 'Győr',
    arrival: 'Budapest',
    departureTime: new Date('2025-04-12T08:30:00'),
    arrivalTime: new Date('2025-04-12T10:15:00'),
    seats: 45,
    availableSeats: 25,
    price: 3100,
    premiumPrice: 4200
  },
  {
    id: 8,
    departure: 'Budapest',
    arrival: 'Miskolc',
    departureTime: new Date('2025-04-12T14:00:00'),
    arrivalTime: new Date('2025-04-12T16:30:00'),
    seats: 50,
    availableSeats: 22,
    price: 4000,
    premiumPrice: 5400
  },
  {
    id: 9,
    departure: 'Debrecen',
    arrival: 'Pécs',
    departureTime: new Date('2025-04-12T05:00:00'),
    arrivalTime: new Date('2025-04-12T10:30:00'),
    seats: 40,
    availableSeats: 7,
    price: 6500,
    premiumPrice: 8200
  },
  {
    id: 10,
    departure: 'Győr',
    arrival: 'Szeged',
    departureTime: new Date('2025-04-12T11:00:00'),
    arrivalTime: new Date('2025-04-12T15:45:00'),
    seats: 35,
    availableSeats: 15,
    price: 5600,
    premiumPrice: 6900
  },
  {
    id: 11,
    departure: 'Pécs',
    arrival: 'Budapest',
    departureTime: new Date('2025-04-12T17:00:00'),
    arrivalTime: new Date('2025-04-12T20:00:00'),
    seats: 50,
    availableSeats: 19,
    price: 4700,
    premiumPrice: 6200
  },
  {
    id: 12,
    departure: 'Szeged',
    arrival: 'Győr',
    departureTime: new Date('2025-04-12T09:00:00'),
    arrivalTime: new Date('2025-04-12T13:30:00'),
    seats: 45,
    availableSeats: 11,
    price: 5900,
    premiumPrice: 7500
  },
  {
    id: 13,
    departure: 'Miskolc',
    arrival: 'Debrecen',
    departureTime: new Date('2025-04-12T15:00:00'),
    arrivalTime: new Date('2025-04-12T16:30:00'),
    seats: 30,
    availableSeats: 28,
    price: 2700,
    premiumPrice: 3500
  },
  {
    id: 14,
    departure: 'Győr',
    arrival: 'Debrecen',
    departureTime: new Date('2025-04-12T12:00:00'),
    arrivalTime: new Date('2025-04-12T17:00:00'),
    seats: 40,
    availableSeats: 9,
    price: 6400,
    premiumPrice: 7900
  },
  {
    id: 15,
    departure: 'Budapest',
    arrival: 'Pécs',
    departureTime: new Date('2025-04-12T07:45:00'),
    arrivalTime: new Date('2025-04-12T10:30:00'),
    seats: 50,
    availableSeats: 24,
    price: 4300,
    premiumPrice: 5700
  },
  {
    id: 16,
    departure: 'Szeged',
    arrival: 'Budapest',
    departureTime: new Date('2025-04-12T13:45:00'),
    arrivalTime: new Date('2025-04-12T16:00:00'),
    seats: 35,
    availableSeats: 16,
    price: 3900,
    premiumPrice: 5000
  },
  {
    id: 17,
    departure: 'Debrecen',
    arrival: 'Győr',
    departureTime: new Date('2025-04-12T06:30:00'),
    arrivalTime: new Date('2025-04-12T11:45:00'),
    seats: 45,
    availableSeats: 8,
    price: 6700,
    premiumPrice: 8400
  },
  {
    id: 18,
    departure: 'Pécs',
    arrival: 'Miskolc',
    departureTime: new Date('2025-04-12T14:00:00'),
    arrivalTime: new Date('2025-04-12T18:15:00'),
    seats: 40,
    availableSeats: 14,
    price: 6200,
    premiumPrice: 7900
  },
  {
    id: 19,
    departure: 'Győr',
    arrival: 'Pécs',
    departureTime: new Date('2025-04-12T09:30:00'),
    arrivalTime: new Date('2025-04-12T13:00:00'),
    seats: 30,
    availableSeats: 13,
    price: 5100,
    premiumPrice: 6700
  },
  {
    id: 20,
    departure: 'Miskolc',
    arrival: 'Budapest',
    departureTime: new Date('2025-04-12T10:15:00'),
    arrivalTime: new Date('2025-04-12T12:45:00'),
    seats: 45,
    availableSeats: 26,
    price: 4000,
    premiumPrice: 5500
  },
  {
    id: 21,
    departure: 'Debrecen',
    arrival: 'Szeged',
    departureTime: new Date('2025-04-12T16:30:00'),
    arrivalTime: new Date('2025-04-12T20:00:00'),
    seats: 50,
    availableSeats: 6,
    price: 5800,
    premiumPrice: 7400
  },
  {
    id: 22,
    departure: 'Szeged',
    arrival: 'Miskolc',
    departureTime: new Date('2025-04-12T08:00:00'),
    arrivalTime: new Date('2025-04-12T12:30:00'),
    seats: 35,
    availableSeats: 17,
    price: 6000,
    premiumPrice: 7700
  },
  {
    id: 23,
    departure: 'Budapest',
    arrival: 'Győr',
    departureTime: new Date('2025-04-12T18:00:00'),
    arrivalTime: new Date('2025-04-12T20:00:00'),
    seats: 30,
    availableSeats: 30,
    price: 3300,
    premiumPrice: 4500
  },
  {
    id: 24,
    departure: 'Pécs',
    arrival: 'Debrecen',
    departureTime: new Date('2025-04-12T11:15:00'),
    arrivalTime: new Date('2025-04-12T16:30:00'),
    seats: 50,
    availableSeats: 50,
    price: 6400,
    premiumPrice: 8000
  },
  {
    id: 25,
    departure: 'Miskolc',
    arrival: 'Győr',
    departureTime: new Date('2025-04-12T12:30:00'),
    arrivalTime: new Date('2025-04-12T17:00:00'),
    seats: 45,
    availableSeats: 21,
    price: 5600,
    premiumPrice: 7100
  }
];
