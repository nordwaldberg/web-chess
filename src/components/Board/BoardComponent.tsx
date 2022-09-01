import React, {FC, useState} from "react";
import styles from './board.module.scss';
import CellComponent from "../Cell/CellComponent";
import {Board} from "../../models/Board";
import {Cell} from "../../models/Cell";

interface BoardProps {
    board: Board,
    setBoard: (board: Board) => void,
}

const BoardComponent: FC<BoardProps> = ({board, setBoard}) => {
    const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

    function selectCellOnClick(cell: Cell) {
        if (cell.figure) {
            setSelectedCell(cell);
        }
    }

    function highlightAvailableCells() {
        board.getAvailableCells(selectedCell);
        boardUpdate();
    }

    function boardUpdate() {
        const newBoard = board.getCopyOfBoard();
        setBoard(newBoard);
    }

    return (
        <div className={styles.board}>
            {
                board.cells.map((row, index) =>
                    <React.Fragment key={index}>
                        {
                            row.map((cell) => {
                                const isSelectedCell = cell.coordinateX === selectedCell?.coordinateX
                                    && cell.coordinateY === selectedCell?.coordinateY

                                return (
                                    <CellComponent cell={cell}
                                                   key={cell.id}
                                                   selected={isSelectedCell}
                                                   selectCell={selectCellOnClick}
                                    />
                                );
                            })
                        }
                    </React.Fragment>
                )
            }
        </div>
    );
};

export default BoardComponent;