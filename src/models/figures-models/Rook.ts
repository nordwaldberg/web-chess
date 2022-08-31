import {Figure, FiguresNames} from "./Figure";
import {Colors} from "../Colors";
import {CellModel} from "../CellModel";
import blackIcon from '../../assets/black-figures/black-rook.png';
import whiteIcon from '../../assets/white-figures/white-rook.png';

export class Rook extends Figure {

    constructor(color: Colors, cell: CellModel) {
        super(color, cell);
        this.icon = color === Colors.BLACK ? blackIcon : whiteIcon;
        this.name = FiguresNames.ROOK;
    }
}