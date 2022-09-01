import {Figure, FiguresNames} from "./Figure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";
import blackIcon from '../../assets/black-figures/black-knight.png';
import whiteIcon from '../../assets/white-figures/white-knight.png';

export class Knight extends Figure {

    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.icon = color === Colors.BLACK ? blackIcon : whiteIcon;
        this.name = FiguresNames.KNIGHT;
    }

    canMove(target: Cell): boolean {
        if(!super.canMove(target)) {
            return false;
        }

        const dX = Math.abs(this.cell.coordinateX - target.coordinateX);
        const dY = Math.abs(this.cell.coordinateY - target.coordinateY);

        return (dX === 2 && dY === 1) || (dX === 1 && dY === 2);
    }
}