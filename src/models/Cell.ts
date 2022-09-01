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

    isEnemy(target: Cell): boolean {
        if (target.figure) {
            return this.figure?.color !== target.figure.color;
        }

        return false;
    }

    isEmptyCell(): boolean {
        return this.figure === null;
    }

    isVerticalEmpty(target: Cell): boolean {
        if (this.coordinateX !== target.coordinateX) {
            return false;
        }

        const min = Math.min(this.coordinateY, target.coordinateY);
        const max = Math.max(this.coordinateY, target.coordinateY);

        for (let y = min + 1; y < max; y++) {
            if (!this.board.getCell(this.coordinateX, y).isEmptyCell()) {
                return false;
            }
        }

        return true;
    }

    isHorizontalEmpty(target: Cell): boolean {
        if (this.coordinateY !== target.coordinateY) {
            return false;
        }

        const min = Math.min(this.coordinateX, target.coordinateX);
        const max = Math.max(this.coordinateX, target.coordinateX);

        for (let x = min + 1; x < max; x++) {
            if (!this.board.getCell(x, this.coordinateY).isEmptyCell()) {
                return false;
            }
        }

        return true;
    }

    isDiagonalEmpty(target: Cell) {
        const absX = Math.abs(target.coordinateX - this.coordinateX);
        const absY = Math.abs(target.coordinateY - this.coordinateY);

        if (absX !== absY) {
            return false;
        }

        const dX = this.coordinateX < target.coordinateX ? 1 : -1;
        const dY = this.coordinateY < target.coordinateY ? 1 : -1;

        for (let i = 1; i < absY; i++) {
            if (!this.board.getCell(this.coordinateX + dX * i, this.coordinateY + dY * i).isEmptyCell()) {
                return false;
            }
        }

        return true;
    }

    setFigure(figure: Figure) {
        this.figure = figure;
        this.figure.cell = this;
    }

    moveFigure(target: Cell) {
        if (this.figure && this.figure?.canMove(target)) {
            this.figure.moveFigure(target);
            target.setFigure(this.figure);
            this.figure = null;
        }
    }
}