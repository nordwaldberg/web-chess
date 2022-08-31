import {Figure, FiguresNames} from "./Figure";
import {Colors} from "../Colors";
import {CellModel} from "../CellModel";
import blackIcon from '../../assets/black-figures/black-queen.png';
import whiteIcon from '../../assets/white-figures/white-queen.png';

export class Queen extends Figure {

    constructor(color: Colors, cell: CellModel) {
        super(color, cell);
        this.icon = color === Colors.BLACK ? blackIcon : whiteIcon;
        this.name = FiguresNames.QUEEN;
    }
}