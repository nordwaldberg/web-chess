import {Figure, FiguresNames} from "./Figure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";
import blackIcon from '../../assets/black-figures/black-king.png';
import whiteIcon from '../../assets/white-figures/white-king.png';


export class King extends Figure {

    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.icon = color === Colors.BLACK ? blackIcon : whiteIcon;
        this.name = FiguresNames.KING;
    }

    canMove(target: Cell): boolean {
        if(!super.canMove(target)) {
            return false;
        }

        const dX = Math.abs(this.cell.coordinateX - target.coordinateX);
        const dY = Math.abs(this.cell.coordinateY - target.coordinateY);

        return (dX === 1 && dY === 0)
            || (dX === 0 && dY === 1)
            || (dX === 1 && dY === 1);
    }
}