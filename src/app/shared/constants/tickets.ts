import { Ticket, TicketStatus } from "../models/Ticket";
import { SCHEDULE_DATA } from "../constants/busroutes";

export const TICKETS: Ticket[] = [
  {
    id: "1",
    route: SCHEDULE_DATA[0],
    status: TicketStatus.InCart
  },
  {
    id: "2",
    route: SCHEDULE_DATA[2],
    status: TicketStatus.Ready
  },
  {
    id: "3",
    route: SCHEDULE_DATA[4],
    status: TicketStatus.Used
  },
  {
    id: "4",
    route: SCHEDULE_DATA[5],
    status: TicketStatus.Ready
  },
  {
    id: "5",
    route: SCHEDULE_DATA[6],
    status: TicketStatus.Ready
  },
  {
    id: "6",
    route: SCHEDULE_DATA[1],
    status: TicketStatus.InCart
  },
  {
    id: "7",
    route: SCHEDULE_DATA[3],
    status: TicketStatus.InCart
  },
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
  },
  {
    id: "11",
    route: SCHEDULE_DATA[12],
    status: TicketStatus.Used
  }
];