import {Figure, FiguresNames} from "./Figure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";
import blackIcon from '../../assets/black-figures/black-bishop.png';
import whiteIcon from '../../assets/white-figures/white-bishop.png';

export class Bishop extends Figure {

    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.icon = color === Colors.BLACK ? blackIcon : whiteIcon;
        this.name = FiguresNames.BISHOP;
    }

    canMove(target: Cell): boolean {
        if(!super.canMove(target)) {
            return false;
        }

        if (this.cell.isDiagonalEmpty(target)) {
            return true;
        }

        return false;
    }
}