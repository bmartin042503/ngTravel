import { Ticket } from "./Ticket";
import { Transaction } from "./Transaction";

export interface User {
    id: string;
    name: {
        firstName: string;
        lastName: string;
    };
    email: string;
    password: string;
    tickets: Ticket[];
    transactions: Transaction[];
}