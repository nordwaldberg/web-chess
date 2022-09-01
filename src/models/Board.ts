import {Cell} from "./Cell";
import {Colors} from "./Colors";
import {Queen} from "./figures-models/Queen";
import {King} from "./figures-models/King";
import {Bishop} from "./figures-models/Bishop";
import {Knight} from "./figures-models/Knight";
import {Rook} from "./figures-models/Rook";
import {Pawn} from "./figures-models/Pawn";

export class Board {
    cells: Cell[][] = [];

    public InitCells() {
        for (let i = 0; i < 8; i++) {
            const row: Cell[] = [];

            for (let j = 0; j < 8; j++) {

                if ((i + j) % 2 !== 0) {
                    const blackCell = new Cell(this, i, j, Colors.BLACK, null);
                    row.push(blackCell);
                } else {
                    const whiteCell = new Cell(this, i, j, Colors.WHITE, null);
                    row.push(whiteCell);
                }
            }
            this.cells.push(row)
        }
    }

    public getCell(x: number, y: number) {
        return this.cells[y][x];
    }

    public getAvailableCells(selectedCell: Cell | null) {
        for (let i = 0; i < this.cells.length; i++) {
            const row = this.cells[i];
            for (let j = 0; j < row.length; j++) {
                const target = row[j];

                target.avaliable = !!selectedCell?.figure?.canMove(target);
            }
        }
    }

    public getCopyOfBoard(): Board {
        const copyBoard = new Board();
        copyBoard.cells = this.cells;

        return copyBoard;
    }

    private getFigures(figures: [Colors, [number, number]][], figuresConstructor: any) {
        figures.forEach((figure) => {
            new figuresConstructor(figure[0], this.getCell(...figure[1]));
        });
    }

    private addQueens() {
        const queens: [Colors, [number, number]][] = [
            [Colors.WHITE, [3, 0]],
            [Colors.BLACK, [3, 7]],
        ];

        this.getFigures(queens, Queen);
    }

    private addKings() {
        const kings: [Colors, [number, number]][] = [
            [Colors.WHITE, [4, 0]],
            [Colors.BLACK, [4, 7]],
        ];

        this.getFigures(kings, King);

    }

    private addBishops() {
        const bishops: [Colors, [number, number]][] = [
            [Colors.WHITE, [2, 0]],
            [Colors.WHITE, [5, 0]],
            [Colors.BLACK, [2, 7]],
            [Colors.BLACK, [5, 7]],
        ];

        this.getFigures(bishops, Bishop);
    }

    private addKnights() {
        const knights: [Colors, [number, number]][] = [
            [Colors.WHITE, [1, 0]],
            [Colors.WHITE, [6, 0]],
            [Colors.BLACK, [1, 7]],
            [Colors.BLACK, [6, 7]],
        ];

        this.getFigures(knights, Knight);
    }

    private addRooks() {
        const rooks: [Colors, [number, number]][] = [
            [Colors.WHITE, [0, 0]],
            [Colors.WHITE, [7, 0]],
            [Colors.BLACK, [0, 7]],
            [Colors.BLACK, [7, 7]],
        ];

        this.getFigures(rooks, Rook);
    }

    private addPawns() {
        const pawns: [Colors, [number, number]][] = [
            [Colors.WHITE, [0, 1]],
            [Colors.WHITE, [1, 1]],
            [Colors.WHITE, [2, 1]],
            [Colors.WHITE, [3, 1]],
            [Colors.WHITE, [4, 1]],
            [Colors.WHITE, [5, 1]],
            [Colors.WHITE, [6, 1]],
            [Colors.WHITE, [7, 1]],
            [Colors.BLACK, [0, 6]],
            [Colors.BLACK, [1, 6]],
            [Colors.BLACK, [2, 6]],
            [Colors.BLACK, [3, 6]],
            [Colors.BLACK, [4, 6]],
            [Colors.BLACK, [5, 6]],
            [Colors.BLACK, [6, 6]],
            [Colors.BLACK, [7, 6]],
        ];

        this.getFigures(pawns, Pawn);
    }

    public addFigures() {
        this.addQueens();
        this.addKings();
        this.addBishops();
        this.addKnights();
        this.addRooks();
        this.addPawns();
    }
}
