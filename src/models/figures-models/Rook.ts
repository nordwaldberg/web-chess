import {Figure, FiguresNames} from "./Figure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";
import blackIcon from '../../assets/black-figures/black-rook.png';
import whiteIcon from '../../assets/white-figures/white-rook.png';

export class Rook extends Figure {

    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.icon = color === Colors.BLACK ? blackIcon : whiteIcon;
        this.name = FiguresNames.ROOK;
    }

    canMove(target: Cell): boolean {
        if(!super.canMove(target)) {
            return false;
        }

        if (this.cell.isVerticalEmpty(target)) {
            return true;
        }

        if (this.cell.isHorizontalEmpty(target)) {
            return true;
        }

        return false;
    }
}