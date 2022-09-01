import {Colors} from "./Colors";
import {Figure} from "./figures-models/Figure";
import {Board} from "./Board";
import {nanoid} from "nanoid";

export class Cell {
    readonly coordinateX: number;
    readonly coordinateY: number;
    readonly color: Colors;
    figure: Figure | null;
    board: Board;

    avaliable: boolean;
    id: string;

    constructor(
        board: Board,
        x: number,
        y: number,
        color: Colors,
        figure: Figure | null
    ) {
        this.board = board;
        this.coordinateX = x;
        this.coordinateY = y;
        this.color = color;
        this.figure = figure;
        this.avaliable = false;
        this.id = nanoid(10);
    }

    moveFigure(target: Cell) {
        if (this.figure && this.figure?.canMove(target)) {
            this.figure.moveFigure(target);
            target.figure = this.figure;
            this.figure = null;
        }
    }
}