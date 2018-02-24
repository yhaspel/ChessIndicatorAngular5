export interface PieceDefinition {
    name: string;
    htmlTag: string;
    player: string;
    quantity: number;
    initialPosition: { x: number[], y: number[] };
    moves: Move[]
}

export interface Move {
    x: number[],
    y: number[],
    constraint?: string
}

export interface Piece {
    name: string;
    htmlTag: string;
    player: string;
    initialPosition: { x: number[], y: number[] };
    moves: { x: number[], y: number[], constraint?: string }[]
}