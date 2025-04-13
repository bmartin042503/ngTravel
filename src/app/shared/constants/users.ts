// Az itt megadott felhasználói adatok fiktívek

import { User } from "../models/User";
import { TICKETS } from "./tickets";
import { TRANSACTIONS } from "./transactions";

export const USERS: User[] = [
  {
    id: "1",
    name: { firstName: "Teszt", lastName: "Felhasználó" },
    email: "test@gmail.com",
    password: "password12345",
    tickets: [],
    transactions: [
      TRANSACTIONS[0],
      TRANSACTIONS[1]
    ]
  },
  {
    id: "2",
    name: { firstName: "Balázs", lastName: "Nagy" },
    email: "balazs.nagy@example.com",
    password: "hashed_pw_2",
    tickets: [TICKETS[0]],
    transactions: []
  },
  {
    id: "3",
    name: { firstName: "Eszter", lastName: "Kovács" },
    email: "eszter.kovacs@example.com",
    password: "hashed_pw_3",
    tickets: [TICKETS[1]],
    transactions: [TRANSACTIONS[0]]
  },
  {
    id: "4",
    name: { firstName: "Ádám", lastName: "Szabó" },
    email: "adam.szabo@example.com",
    password: "hashed_pw_4",
    tickets: [TICKETS[2], TICKETS[3]],
    transactions: [TRANSACTIONS[1]]
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
    tickets: [TICKETS[4]],
    transactions: [TRANSACTIONS[2]]
  },
  {
    id: "7",
    name: { firstName: "Júlia", lastName: "Kiss" },
    email: "julia.kiss@example.com",
    password: "hashed_pw_7",
    tickets: [TICKETS[5], TICKETS[6]],
    transactions: []
  },
  {
    id: "8",
    name: { firstName: "Levente", lastName: "Varga" },
    email: "levente.varga@example.com",
    password: "hashed_pw_8",
    tickets: [TICKETS[7], TICKETS[8], TICKETS[9]],
    transactions: [TRANSACTIONS[3]]
  },
  {
    id: "9",
    name: { firstName: "Tamás", lastName: "Pintér" },
    email: "tamas.pinter@example.com",
    password: "hashed_pw_9",
    tickets: [TICKETS[10]],
    transactions: [TRANSACTIONS[4]]
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