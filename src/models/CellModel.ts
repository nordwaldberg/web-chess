import {Colors} from "./Colors";
import {Figure} from "./figures-models/Figure";
import {BoardModel} from "./BoardModel";
import {nanoid} from "nanoid";

export class CellModel {
    readonly coordinateX: number;
    readonly coordinateY: number;
    readonly color: Colors;
    figure: Figure | null;
    board: BoardModel;

    avaliable: boolean;
    id: string;

    constructor(
        board: BoardModel,
        x: number,
        y: number,
        color: Colors,
        figure: Figure | null
    ) {
        this.board = board;
        this.coordinateX = x;
        this.coordinateY = y;
        this.color = color;
        this.figure = figure;
        this.avaliable = false;
        this.id = nanoid(10);
    }
}