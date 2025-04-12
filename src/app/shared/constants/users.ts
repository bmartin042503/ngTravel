// Az itt megadott felhasználói adatok fiktívek

import { User } from "../models/User";
import { SCHEDULE_DATA } from "../constants/busroutes";
import { TicketStatus } from "../models/Ticket";

export const USERS: User[] = [
  {
    id: "1",
    name: { firstName: "Nagy", lastName: "Krisztián" },
    email: "test@gmail.com",
    password: "password12345",
    tickets: [],
    transactions: []
  },
  {
    id: "2",
    name: { firstName: "Balázs", lastName: "Nagy" },
    email: "balazs.nagy@example.com",
    password: "hashed_pw_2",
    tickets: [
      {
        id: "1",
        route: SCHEDULE_DATA[0],
        status: TicketStatus.InCart
      }
    ],
    transactions: []
  },
  {
    id: "3",
    name: { firstName: "Eszter", lastName: "Kovács" },
    email: "eszter.kovacs@example.com",
    password: "hashed_pw_3",
    tickets: [
      {
        id: "2",
        route: SCHEDULE_DATA[2],
        status: TicketStatus.Ready
      }
    ],
    transactions: [
      {
        id: "1",
        timestamp: new Date("2025-04-10T09:00:00"),
        info: "Jegyvásárlás: Győr → Miskolc",
        paidAmount: SCHEDULE_DATA[2].price
      }
    ]
  },
  {
    id: "4",
    name: { firstName: "Ádám", lastName: "Szabó" },
    email: "adam.szabo@example.com",
    password: "hashed_pw_4",
    tickets: [
      {
        id: "3",
        route: SCHEDULE_DATA[4],
        status: TicketStatus.Used
      },
      {
        id: "4",
        route: SCHEDULE_DATA[5],
        status: TicketStatus.Ready
      }
    ],
    transactions: [
      {
        id: "2",
        timestamp: new Date("2025-04-08T14:20:00"),
        info: "2 db jegyvásárlás: Miskolc → Debrecen, Pécs → Szombathely",
        paidAmount: SCHEDULE_DATA[4].price + SCHEDULE_DATA[5].price
      }
    ]
  },
  {
    id: "5",
    name: { firstName: "Réka", lastName: "Tóth" },
    email: "reka.toth@example.com",
    password: "hashed_pw_5",
    tickets: [],
    transactions: []
  },
  {
    id: "6",
    name: { firstName: "Gergő", lastName: "Horváth" },
    email: "gergo.horvath@example.com",
    password: "hashed_pw_6",
    tickets: [
      {
        id: "5",
        route: SCHEDULE_DATA[6],
        status: TicketStatus.Ready
      }
    ],
    transactions: [
      {
        id: "3",
        timestamp: new Date("2025-04-11T10:00:00"),
        info: "Jegyvásárlás: Sopron → Budapest",
        paidAmount: SCHEDULE_DATA[6].price
      }
    ]
  },
  {
    id: "7",
    name: { firstName: "Júlia", lastName: "Kiss" },
    email: "julia.kiss@example.com",
    password: "hashed_pw_7",
    tickets: [
      {
        id: "6",
        route: SCHEDULE_DATA[1],
        status: TicketStatus.InCart
      },
      {
        id: "7",
        route: SCHEDULE_DATA[3],
        status: TicketStatus.InCart
      }
    ],
    transactions: []
  },
  {
    id: "8",
    name: { firstName: "Levente", lastName: "Varga" },
    email: "levente.varga@example.com",
    password: "hashed_pw_8",
    tickets: [
      {
        id: "8",
        route: SCHEDULE_DATA[9],
        status: TicketStatus.Ready
      },
      {
        id: "9",
        route: SCHEDULE_DATA[10],
        status: TicketStatus.Ready
      },
      {
        id: "10",
        route: SCHEDULE_DATA[11],
        status: TicketStatus.Ready
      }
    ],
    transactions: [
      {
        id: "4",
        timestamp: new Date("2025-04-09T17:45:00"),
        info: "3 db jegyvásárlás: Debrecen → Nyíregyháza, Budapest → Székesfehérvár, Kecskemét → Békéscsaba",
        paidAmount:
          SCHEDULE_DATA[9].price +
          SCHEDULE_DATA[10].price +
          SCHEDULE_DATA[11].price
      }
    ]
  },
  {
    id: "9",
    name: { firstName: "Tamás", lastName: "Pintér" },
    email: "tamas.pinter@example.com",
    password: "hashed_pw_9",
    tickets: [
      {
        id: "11",
        route: SCHEDULE_DATA[12],
        status: TicketStatus.Used
      }
    ],
    transactions: [
      {
        id: "5",
        timestamp: new Date("2025-04-05T08:00:00"),
        info: "Jegyvásárlás: Tatabánya → Győr",
        paidAmount: SCHEDULE_DATA[12].price
      }
    ]
  },
  {
    id: "10",
    name: { firstName: "Petra", lastName: "Simon" },
    email: "petra.simon@example.com",
    password: "hashed_pw_10",
    tickets: [],
    transactions: []
  }
];