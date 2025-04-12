import { BusRoute } from "./models/BusRoute";

export const SCHEDULE_DATA: BusRoute[] = [
  {
    id: '0',
    routeNumber: 1001,
    departure: {
      location: 'Budapest',
      time: new Date('2025-04-12T08:30:00'),
    },
    arrival: {
      location: 'Debrecen',
      time: new Date('2025-04-12T11:00:00'),
    },
    seats: {
      total: 50,
      reserved: 5,
    },
    price: 4500,
  },
  {
    id: '1',
    routeNumber: 1002,
    departure: {
      location: 'Szeged',
      time: new Date('2025-04-12T14:00:00'),
    },
    arrival: {
      location: 'Pécs',
      time: new Date('2025-04-12T18:30:00'),
    },
    seats: {
      total: 40,
      reserved: 35,
    },
    price: 5200,
  },
  {
    id: '2',
    routeNumber: 1003,
    departure: {
      location: 'Győr',
      time: new Date('2025-04-13T06:45:00'),
    },
    arrival: {
      location: 'Miskolc',
      time: new Date('2025-04-13T11:15:00'),
    },
    seats: {
      total: 45,
      reserved: 0,
    },
    price: 6100,
  },
  {
    id: '3',
    routeNumber: 1004,
    departure: {
      location: 'Budapest',
      time: new Date('2025-04-13T17:30:00'),
    },
    arrival: {
      location: 'Pécs',
      time: new Date('2025-04-13T20:00:00'),
    },
    seats: {
      total: 50,
      reserved: 48,
    },
    price: 4000,
  },
  {
    id: '4',
    routeNumber: 1005,
    departure: {
      location: 'Miskolc',
      time: new Date('2025-04-14T10:00:00'),
    },
    arrival: {
      location: 'Debrecen',
      time: new Date('2025-04-14T11:45:00'),
    },
    seats: {
      total: 30,
      reserved: 10,
    },
    price: 2300,
  },
  {
    id: '5',
    routeNumber: 1006,
    departure: {
      location: 'Pécs',
      time: new Date('2025-04-14T13:15:00'),
    },
    arrival: {
      location: 'Szombathely',
      time: new Date('2025-04-14T16:45:00'),
    },
    seats: {
      total: 40,
      reserved: 0,
    },
    price: 4600,
  },
  {
    id: '6',
    routeNumber: 1007,
    departure: {
      location: 'Sopron',
      time: new Date('2025-04-15T07:00:00'),
    },
    arrival: {
      location: 'Budapest',
      time: new Date('2025-04-15T10:30:00'),
    },
    seats: {
      total: 50,
      reserved: 49,
    },
    price: 5500,
  },
  {
    id: '7',
    routeNumber: 1008,
    departure: {
      location: 'Eger',
      time: new Date('2025-04-15T16:00:00'),
    },
    arrival: {
      location: 'Szeged',
      time: new Date('2025-04-15T20:00:00'),
    },
    seats: {
      total: 35,
      reserved: 12,
    },
    price: 4800,
  },
  {
    id: '8',
    routeNumber: 1009,
    departure: {
      location: 'Zalaegerszeg',
      time: new Date('2025-04-16T05:45:00'),
    },
    arrival: {
      location: 'Győr',
      time: new Date('2025-04-16T08:00:00'),
    },
    seats: {
      total: 30,
      reserved: 2,
    },
    price: 2600,
  },
  {
    id: '9',
    routeNumber: 1010,
    departure: {
      location: 'Debrecen',
      time: new Date('2025-04-16T14:00:00'),
    },
    arrival: {
      location: 'Nyíregyháza',
      time: new Date('2025-04-16T15:00:00'),
    },
    seats: {
      total: 20,
      reserved: 1,
    },
    price: 1800,
  },
  {
    id: '10',
    routeNumber: 1011,
    departure: {
      location: 'Budapest',
      time: new Date('2025-04-17T09:30:00'),
    },
    arrival: {
      location: 'Székesfehérvár',
      time: new Date('2025-04-17T10:30:00'),
    },
    seats: {
      total: 60,
      reserved: 55,
    },
    price: 2200,
  },
  {
    id: '11',
    routeNumber: 1012,
    departure: {
      location: 'Kecskemét',
      time: new Date('2025-04-17T18:00:00'),
    },
    arrival: {
      location: 'Békéscsaba',
      time: new Date('2025-04-17T20:30:00'),
    },
    seats: {
      total: 40,
      reserved: 0,
    },
    price: 3900,
  },
  {
    id: '12',
    routeNumber: 1013,
    departure: {
      location: 'Tatabánya',
      time: new Date('2025-04-18T07:15:00'),
    },
    arrival: {
      location: 'Győr',
      time: new Date('2025-04-18T08:45:00'),
    },
    seats: {
      total: 25,
      reserved: 24,
    },
    price: 2000,
  },
  {
    id: '13',
    routeNumber: 1014,
    departure: {
      location: 'Szombathely',
      time: new Date('2025-04-18T12:00:00'),
    },
    arrival: {
      location: 'Veszprém',
      time: new Date('2025-04-18T15:00:00'),
    },
    seats: {
      total: 30,
      reserved: 15,
    },
    price: 3700,
  },
  {
    id: '14',
    routeNumber: 1015,
    departure: {
      location: 'Nyíregyháza',
      time: new Date('2025-04-18T06:00:00'),
    },
    arrival: {
      location: 'Budapest',
      time: new Date('2025-04-18T10:00:00'),
    },
    seats: {
      total: 55,
      reserved: 50,
    },
    price: 6000,
  },
  {
    id: '15',
    routeNumber: 1016,
    departure: {
      location: 'Székesfehérvár',
      time: new Date('2025-04-19T13:00:00'),
    },
    arrival: {
      location: 'Pécs',
      time: new Date('2025-04-19T17:00:00'),
    },
    seats: {
      total: 40,
      reserved: 8,
    },
    price: 4900,
  },
  {
    id: '16',
    routeNumber: 1017,
    departure: {
      location: 'Miskolc',
      time: new Date('2025-04-19T09:30:00'),
    },
    arrival: {
      location: 'Eger',
      time: new Date('2025-04-19T11:00:00'),
    },
    seats: {
      total: 20,
      reserved: 3,
    },
    price: 2100,
  },
  {
    id: '17',
    routeNumber: 1018,
    departure: {
      location: 'Pécs',
      time: new Date('2025-04-20T07:30:00'),
    },
    arrival: {
      location: 'Budapest',
      time: new Date('2025-04-20T10:00:00'),
    },
    seats: {
      total: 50,
      reserved: 50,
    },
    price: 4500,
  },
  {
    id: '18',
    routeNumber: 1019,
    departure: {
      location: 'Győr',
      time: new Date('2025-04-20T15:00:00'),
    },
    arrival: {
      location: 'Sopron',
      time: new Date('2025-04-20T16:30:00'),
    },
    seats: {
      total: 30,
      reserved: 2,
    },
    price: 2100,
  },
  {
    id: '19',
    routeNumber: 1020,
    departure: {
      location: 'Kaposvár',
      time: new Date('2025-04-21T08:00:00'),
    },
    arrival: {
      location: 'Szekszárd',
      time: new Date('2025-04-21T09:45:00'),
    },
    seats: {
      total: 35,
      reserved: 0,
    },
    price: 2700,
  },
  {
    id: '20',
    routeNumber: 1021,
    departure: {
      location: 'Veszprém',
      time: new Date('2025-04-21T14:30:00'),
    },
    arrival: {
      location: 'Budapest',
      time: new Date('2025-04-21T16:00:00'),
    },
    seats: {
      total: 40,
      reserved: 20,
    },
    price: 2900,
  },
  {
    id: '21',
    routeNumber: 1022,
    departure: {
      location: 'Szolnok',
      time: new Date('2025-04-22T07:00:00'),
    },
    arrival: {
      location: 'Kecskemét',
      time: new Date('2025-04-22T08:00:00'),
    },
    seats: {
      total: 25,
      reserved: 5,
    },
    price: 3100,
  },
  {
    id: '22',
    routeNumber: 1023,
    departure: {
      location: 'Szolnok',
      time: new Date('2025-04-22T13:00:00'),
    },
    arrival: {
      location: 'Kecskemét',
      time: new Date('2025-04-22T14:00:00'),
    },
    seats: {
      total: 30,
      reserved: 29,
    },
    price: 1900,
  }
];
