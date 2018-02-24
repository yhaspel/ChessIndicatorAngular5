import { Component } from '@angular/core';
import { BoardHelperService } from './board.helper';
import { Move, PieceDefinition, Piece } from './board.interfaces';

const BOARD_SIZE = 8;

@Component({
    selector: 'board',
    templateUrl: './board.component.html',
    providers: [BoardHelperService],
    styleUrls: ['./board.component.scss']
})
export class BoardComponent {

    board;
    possibleMoves: Array<Array<{ available: boolean, takedown: boolean }>>;
    pieces: Piece[] = this.boardHelper.pieces;

    constructor(
        private boardHelper: BoardHelperService
    ) { }

    ngOnInit() {
        this.initializeBoard();
        this.clearPossibleMoves();
    }

    initializeBoard() {
        this.clearBoard();
        this.clearPossibleMoves();
        this.pieces.forEach(piece => {
            piece.initialPosition.x.forEach(xPosition => {
                piece.initialPosition.y.forEach(yPosition => {
                    this.board[yPosition][xPosition] = piece;
                });
            })
        });
    }

    clearBoard() {
        this.board = [];
        for (let i = 0; i < BOARD_SIZE; i++) {
            this.board.push(Array(BOARD_SIZE).fill(null));
        }
    }

    cellClicked(cell, i, j) {
        this.clearPossibleMoves();
        cell.moves.forEach(move => {
            let coords = this.boardHelper.getProposedCoords(move, cell, i, j, this.board);
            for (let idx = 0; idx < coords.length; idx++) {
                let coord = coords[idx];
                let isWithinBoardLimits = i + coord.y < BOARD_SIZE
                    && i + coord.y >= 0
                    && j + coord.x < BOARD_SIZE
                    && j + coord.x >= 0;
                if (isWithinBoardLimits) {
                    if (this.board[i + coord.y][j + coord.x]) {
                        if (this.board[i + coord.y][j + coord.x].player == cell.player) {
                            break;
                        } else {
                            // takedown possible
                            this.possibleMoves[i + coord.y][j + coord.x] = { available: false, takedown: true };
                            break;
                        }
                    } else {
                        this.possibleMoves[i + coord.y][j + coord.x] = { available: true, takedown: false };
                    }
                }
            }
        });
    }

    private clearPossibleMoves() {
        this.possibleMoves = [];
        for (let i = 0; i < BOARD_SIZE; i++) {
            this.possibleMoves.push(Array(BOARD_SIZE).fill({ available: false, takedown: false }));
        }
    }

    private randomizeBoard() {
        this.clearBoard();
        this.clearPossibleMoves();
        let remainingPieces = this.pieces.concat();
        while (remainingPieces.length) {
            let pieceIdx = this.boardHelper.getRandomPieceIdx(remainingPieces.length);
            let coords = this.boardHelper.getRandomCoords();
            if (!this.board[coords.x][coords.y]) {
                this.board[coords.x][coords.y] = remainingPieces[pieceIdx];
                remainingPieces.splice(pieceIdx, 1);
            }
        }
    }
}