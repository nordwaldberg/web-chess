import {Figure, FiguresNames} from "./Figure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";
import blackIcon from '../../assets/black-figures/black-queen.png';
import whiteIcon from '../../assets/white-figures/white-queen.png';

export class Queen extends Figure {

    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.icon = color === Colors.BLACK ? blackIcon : whiteIcon;
        this.name = FiguresNames.QUEEN;
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

        if (this.cell.isDiagonalEmpty(target)) {
            return true;
        }

        return false;
    }
}