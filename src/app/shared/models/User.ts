export interface User {
    id: string;
    name: {
        firstName: string;
        lastName: string;
    };
    email: string;
    tickets: string[];
    transactions: string[];
}