import {Figure, FiguresNames} from "./Figure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";
import blackIcon from '../../assets/black-figures/black-pawn.png';
import whiteIcon from '../../assets/white-figures/white-pawn.png';

export class Pawn extends Figure {

    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.icon = color === Colors.BLACK ? blackIcon : whiteIcon;
        this.name = FiguresNames.PAWN;
    }

    isFirstStep: boolean = true;

    canMove(target: Cell): boolean {
        if (!super.canMove(target)) {
            return false;
        }

        const stepsDirection = this.cell.figure?.color === Colors.BLACK ? -1 : 1;
        const firstStepDirection = this.cell.figure?.color === Colors.BLACK ? -2 : 2;

        if ((target.coordinateY === this.cell.coordinateY + stepsDirection || this.isFirstStep
                && (target.coordinateY === this.cell.coordinateY + firstStepDirection))
            && target.coordinateX === this.cell.coordinateX
            && this.cell.board.getCell(target.coordinateX, target.coordinateY).isEmptyCell()) {
            return true;
        }

        if(target.coordinateY === this.cell.coordinateY + stepsDirection
            && (target.coordinateX === this.cell.coordinateX + 1 || target.coordinateX === this.cell.coordinateX - 1)
            && this.cell.isEnemy(target)) {
            return true;
        }

        return false;
    }

    moveFigure(target: Cell) {
        super.moveFigure(target);
        this.isFirstStep = false;
    }
}