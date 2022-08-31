import {Figure, FiguresNames} from "./Figure";
import {Colors} from "../Colors";
import {CellModel} from "../CellModel";
import blackIcon from '../../assets/black-figures/black-king.png';
import whiteIcon from '../../assets/white-figures/white-king.png';


export class King extends Figure {

    constructor(color: Colors, cell: CellModel) {
        super(color, cell);
        this.icon = color === Colors.BLACK ? blackIcon : whiteIcon;
        this.name = FiguresNames.KING;
    }
}