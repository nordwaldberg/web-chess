import {CellModel} from "./CellModel";
import {Colors} from "./Colors";

export class BoardModel {
    cells: CellModel[][] = [];

    public InitCells() {
        for (let i = 0; i < 8; i++) {
            const row: CellModel[] = [];

            for (let j = 0; j < 8; j++) {

                if ((i + j) % 2 !== 0) {
                    const blackCell = new CellModel(this, i, j, Colors.BLACK, null);
                    row.push(blackCell);
                } else {
                    const whiteCell = new CellModel(this, i, j, Colors.WHITE, null);
                    row.push(whiteCell);
                }
            }
            this.cells.push(row);
        }
    }
}
