import { Transaction } from "../models/Transaction";
import { SCHEDULE_DATA } from "../constants/busroutes";

export const TRANSACTIONS: Transaction[] = [
  {
    id: "1",
    timestamp: new Date("2025-04-10T09:00:00"),
    info: "Győr → Miskolc",
    paidAmount: SCHEDULE_DATA[2].price
  },
  {
    id: "2",
    timestamp: new Date("2025-04-08T14:20:00"),
    info: "Miskolc → Debrecen, Pécs → Szombathely",
    paidAmount: SCHEDULE_DATA[4].price + SCHEDULE_DATA[5].price
  },
  {
    id: "3",
    timestamp: new Date("2025-04-11T10:00:00"),
    info: "Sopron → Budapest",
    paidAmount: SCHEDULE_DATA[6].price
  },
  {
    id: "4",
    timestamp: new Date("2025-04-09T17:45:00"),
    info: "Debrecen → Nyíregyháza, Budapest → Székesfehérvár, Kecskemét → Békéscsaba",
    paidAmount: SCHEDULE_DATA[9].price + SCHEDULE_DATA[10].price + SCHEDULE_DATA[11].price
  },
  {
    id: "5",
    timestamp: new Date("2025-04-05T08:00:00"),
    info: "Tatabánya → Győr",
    paidAmount: SCHEDULE_DATA[12].price
  }
];