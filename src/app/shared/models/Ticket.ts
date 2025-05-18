// status
// InCart - kosárban lévő jegy
// Ready - megvásárolt, felhasználásra váró jegy
// Expired - felhasznált vagy lejárt jegy

export interface Ticket {
    id: string;
    route: string;
    status: string;
}