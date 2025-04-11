import { Ticket } from "./Ticket";

export interface User {
    id: string;
    name: {
        firstName: string;
        lastName: string;
    };
    email: string;
    password: string;
    tickets: Ticket[];
}