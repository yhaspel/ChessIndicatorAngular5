import { Injectable } from '@angular/core';
import { Move, PieceDefinition, Piece } from './board.interfaces';

const BOARD_SIZE = 8;

@Injectable()
export class BoardHelperService {
    get piecesDef(): PieceDefinition[] {
        return [
            {
                name: 'rook',
                htmlTag: `&#9820;`,
                player: 'black',
                quantity: 2,
                initialPosition: { x: [0, 7], y: [0] },
                moves: [
                    { x: [0], y: [1, 2, 3, 4, 5, 6, 7] },
                    { x: [0], y: [-1, -2, -3, -4, -5, -6, -7] },
                    { x: [1, 2, 3, 4, 5, 6, 7], y: [0] },
                    { x: [-1, -2, -3, -4, -5, -6, -7], y: [0] },
                ]
            }, {
                name: 'knight',
                htmlTag: `&#9822;`,
                player: 'black',
                quantity: 2,
                initialPosition: { x: [1, 6], y: [0] },
                moves: [
                    { x: [1], y: [-2] },
                    { x: [1], y: [2] },
                    { x: [-1], y: [-2] },
                    { x: [-1], y: [2] },
                    { x: [2], y: [-1] },
                    { x: [2], y: [1] },
                    { x: [-2], y: [-1] },
                    { x: [-2], y: [1] },
                ]
            }, {
                name: 'bishop',
                htmlTag: `&#9821;`,
                player: 'black',
                quantity: 2,
                initialPosition: { x: [2, 5], y: [0] },
                moves: [
                    { x: [1, 2, 3, 4, 5, 6, 7], y: [1, 2, 3, 4, 5, 6, 7], constraint: 'diagonal' },
                    { x: [1, 2, 3, 4, 5, 6, 7], y: [-1, -2, -3, -4, -5, -6, -7], constraint: 'diagonal' },
                    { x: [-1, -2, -3, -4, -5, -6, -7], y: [-1, -2, -3, -4, -5, -6, -7], constraint: 'diagonal' },
                    { x: [-1, -2, -3, -4, -5, -6, -7], y: [1, 2, 3, 4, 5, 6, 7], constraint: 'diagonal' },
                ]
            }, {
                name: 'queen',
                htmlTag: `&#9819;`,
                player: 'black',
                quantity: 1,
                initialPosition: { x: [4], y: [0] },
                moves: [
                    { x: [1, 2, 3, 4, 5, 6, 7], y: [1, 2, 3, 4, 5, 6, 7], constraint: 'diagonal' },
                    { x: [1, 2, 3, 4, 5, 6, 7], y: [-1, -2, -3, -4, -5, -6, -7], constraint: 'diagonal' },
                    { x: [-1, -2, -3, -4, -5, -6, -7], y: [-1, -2, -3, -4, -5, -6, -7], constraint: 'diagonal' },
                    { x: [-1, -2, -3, -4, -5, -6, -7], y: [1, 2, 3, 4, 5, 6, 7], constraint: 'diagonal' },
                    { x: [0], y: [1, 2, 3, 4, 5, 6, 7] },
                    { x: [0], y: [-1, -2, -3, -4, -5, -6, -7] },
                    { x: [1, 2, 3, 4, 5, 6, 7], y: [0] },
                    { x: [-1, -2, -3, -4, -5, -6, -7], y: [0] },
                ]
            }, {
                name: 'king',
                htmlTag: `&#9818;`,
                player: 'black',
                quantity: 1,
                initialPosition: { x: [3], y: [0] },
                moves: [
                    { x: [1], y: [1] },
                    { x: [1], y: [-1] },
                    { x: [-1], y: [-1] },
                    { x: [-1], y: [1] },
                    { x: [0], y: [1] },
                    { x: [0], y: [-1] },
                    { x: [1], y: [0] },
                    { x: [-1], y: [0] },
                ]
            }, {
                name: 'pawn',
                htmlTag: `&#9823;`,
                player: 'black',
                quantity: 8,
                initialPosition: { x: [0, 1, 2, 3, 4, 5, 6, 7], y: [1] },
                moves: [
                    { x: [0], y: [1], constraint: 'pawn' },
                    { x: [0], y: [2], constraint: 'pawn first move' },
                    { x: [-1, 1], y: [1], constraint: 'pawn takedown' },
                ]
            }, {
                name: 'rook',
                htmlTag: `&#9814;`,
                player: 'white',
                quantity: 2,
                initialPosition: { x: [0, 7], y: [7] },
                moves: [
                    { x: [0], y: [1, 2, 3, 4, 5, 6, 7] },
                    { x: [0], y: [-1, -2, -3, -4, -5, -6, -7] },
                    { x: [1, 2, 3, 4, 5, 6, 7], y: [0] },
                    { x: [-1, -2, -3, -4, -5, -6, -7], y: [0] },
                ]
            }, {
                name: 'knight',
                htmlTag: `&#9816;`,
                player: 'white',
                quantity: 2,
                initialPosition: { x: [1, 6], y: [7] },
                moves: [
                    { x: [1], y: [-2] },
                    { x: [1], y: [2] },
                    { x: [-1], y: [-2] },
                    { x: [-1], y: [2] },
                    { x: [2], y: [-1] },
                    { x: [2], y: [1] },
                    { x: [-2], y: [-1] },
                    { x: [-2], y: [1] },
                ]
            }, {
                name: 'bishop',
                htmlTag: `&#9815;`,
                player: 'white',
                quantity: 2,
                initialPosition: { x: [2, 5], y: [7] },
                moves: [
                    { x: [1, 2, 3, 4, 5, 6, 7], y: [1, 2, 3, 4, 5, 6, 7], constraint: 'diagonal' },
                    { x: [1, 2, 3, 4, 5, 6, 7], y: [-1, -2, -3, -4, -5, -6, -7], constraint: 'diagonal' },
                    { x: [-1, -2, -3, -4, -5, -6, -7], y: [-1, -2, -3, -4, -5, -6, -7], constraint: 'diagonal' },
                    { x: [-1, -2, -3, -4, -5, -6, -7], y: [1, 2, 3, 4, 5, 6, 7], constraint: 'diagonal' },
                ]
            }, {
                name: 'queen',
                htmlTag: `&#9813;`,
                player: 'white',
                quantity: 1,
                initialPosition: { x: [4], y: [7] },
                moves: [
                    { x: [1, 2, 3, 4, 5, 6, 7], y: [1, 2, 3, 4, 5, 6, 7], constraint: 'diagonal' },
                    { x: [1, 2, 3, 4, 5, 6, 7], y: [-1, -2, -3, -4, -5, -6, -7], constraint: 'diagonal' },
                    { x: [-1, -2, -3, -4, -5, -6, -7], y: [-1, -2, -3, -4, -5, -6, -7], constraint: 'diagonal' },
                    { x: [-1, -2, -3, -4, -5, -6, -7], y: [1, 2, 3, 4, 5, 6, 7], constraint: 'diagonal' },
                    { x: [0], y: [1, 2, 3, 4, 5, 6, 7] },
                    { x: [0], y: [-1, -2, -3, -4, -5, -6, -7] },
                    { x: [1, 2, 3, 4, 5, 6, 7], y: [0] },
                    { x: [-1, -2, -3, -4, -5, -6, -7], y: [0] },
                ]
            }, {
                name: 'king',
                htmlTag: `&#9812;`,
                player: 'white',
                quantity: 1,
                initialPosition: { x: [3], y: [7] },
                moves: [
                    { x: [1], y: [1] },
                    { x: [1], y: [-1] },
                    { x: [-1], y: [-1] },
                    { x: [-1], y: [1], },
                    { x: [0], y: [1] },
                    { x: [0], y: [-1] },
                    { x: [1], y: [0] },
                    { x: [-1], y: [0] },
                ]
            }, {
                name: 'pawn',
                htmlTag: `&#9817;`,
                player: 'white',
                quantity: 8,
                initialPosition: { x: [0, 1, 2, 3, 4, 5, 6, 7], y: [6] },
                moves: [
                    { x: [0], y: [-1], constraint: 'pawn' },
                    { x: [0], y: [-2], constraint: 'pawn first move' },
                    { x: [-1, 1], y: [-1], constraint: 'pawn takedown' },
                ]
            },
        ];
    }

    get pieces(): Piece[] {
        let pieces: Piece[] = [];
        this.piecesDef.forEach(pieceDef => {
            for (let i = 0; i < pieceDef.quantity; i++) {
                pieces.push({
                    name: pieceDef.name,
                    htmlTag: pieceDef.htmlTag,
                    initialPosition: pieceDef.initialPosition,
                    player: pieceDef.player,
                    moves: pieceDef.moves
                });
            }
        });

        return pieces;
    }

    getRandomPieceIdx(piecesArrLength: number): number {
        return Math.floor(Math.random() * piecesArrLength);
    }

    getRandomCoords(): { x: number, y: number } {
        const boardSize = 8;
        let randX = Math.floor(Math.random() * boardSize);
        let randY = Math.floor(Math.random() * boardSize);
        return { x: randX, y: randY };
    }

    getProposedCoords(move: Move, cell: Piece, i: number, j: number, board) {
        let coords = [];
        move.y.forEach(yMove => {
            move.x.forEach(xMove => {
                if (!move.constraint) {
                    coords.push({ y: yMove, x: xMove });
                } else {
                    switch (move.constraint) {
                        case 'diagonal':
                            if (yMove == xMove || yMove == (-1 * xMove)) {
                                coords.push({ y: yMove, x: xMove });
                            }
                            break;
                        case 'pawn':
                            if (i + 1 < BOARD_SIZE && cell.player == 'black' && !board[i + 1][j]) {
                                coords.push({ y: yMove, x: xMove });
                            } else if (i - 1 >= 0 && cell.player == 'white' && !board[i - 1][j]) {
                                coords.push({ y: yMove, x: xMove });
                            }
                            break;
                        case 'pawn first move':
                            if (i == 1 && cell.player == 'black' && !board[i + 1][j] && !board[i + 2][j]) {
                                coords.push({ y: yMove, x: xMove });
                            } else if (i == 6 && cell.player == 'white' && !board[i - 1][j] && !board[i - 2][j]) {
                                coords.push({ y: yMove, x: xMove });
                            }
                            break;
                        case 'pawn takedown':
                            if (cell.player == 'black'
                                && i + 1 < BOARD_SIZE
                                && j + xMove >= 0
                                && j + xMove < BOARD_SIZE
                                && board[i + yMove][j + xMove]
                                && cell.player != board[i + yMove][j + xMove].player) {
                                if (board[i + yMove][j + xMove]) {
                                    coords.push({ y: yMove, x: xMove });
                                }
                            } else if (cell.player == 'white'
                                && i - 1 >= 0
                                && j + xMove >= 0
                                && j + xMove < BOARD_SIZE
                                && board[i + yMove][j + xMove]
                                && cell.player != board[i + yMove][j + xMove].player) {
                                if (board[i + yMove][j + xMove]) {
                                    coords.push({ y: yMove, x: xMove });
                                }
                            }
                            break;
                    }
                }
            });
        })
        return coords;
    }
}
