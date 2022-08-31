import figureIcon from "../../assets/black-figures/black-bishop.png";
import {Colors} from "../Colors";
import {CellModel} from "../CellModel";
import {nanoid} from "nanoid";

export enum FiguresNames {
    FIGURE = 'figure',
    QUEEN = 'queen',
    KING = 'king',
    BISHOP = 'bishop',
    ROOK = 'rook',
    KNIGHT = 'knight',
    PAWN = 'pawn',
}

export class Figure {
    color: Colors;
    icon: typeof figureIcon | null;
    cell: CellModel;
    name: FiguresNames;
    id: string;

    constructor(color: Colors, cell: CellModel) {
        this.color = color;
        this.cell = cell;
        this.cell.figure = this;
        this.icon = null;
        this.name = FiguresNames.FIGURE;
        this.id = nanoid(10);
    }

    canMove(target: CellModel): boolean {
        return true;
    }

    moveFigure(target: CellModel) {
        
    }
}

