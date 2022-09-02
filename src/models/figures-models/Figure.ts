import figureIcon from "../../assets/black-figures/black-bishop.png";
import {Colors} from "../Colors";
import {Cell} from "../Cell";
import {nanoid} from "nanoid";

export enum FiguresNames {
    FIGURE = 'Figure',
    QUEEN = 'Queen',
    KING = 'King',
    BISHOP = 'Bishop',
    ROOK = 'Rook',
    KNIGHT = 'Knight',
    PAWN = 'Pawn',
}

export class Figure {
    color: Colors;
    icon: typeof figureIcon | null;
    cell: Cell;
    name: FiguresNames;
    id: string;

    constructor(color: Colors, cell: Cell) {
        this.color = color;
        this.cell = cell;
        this.cell.figure = this;
        this.icon = null;
        this.name = FiguresNames.FIGURE;
        this.id = nanoid(10);
    }

    canMove(target: Cell): boolean {
        if (target.figure?.color === this.color) {
            return false;
        }

        if (target.figure?.name === FiguresNames.KING) {
            return false;
        }

        return true;
    }

    moveFigure(target: Cell) {

    }
}

