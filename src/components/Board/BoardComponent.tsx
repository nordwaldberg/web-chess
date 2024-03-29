import React, {FC, useEffect, useState} from "react";
import styles from './board.module.scss';
import CellComponent from "../Cell/CellComponent";
import {Board} from "../../models/Board";
import {Cell} from "../../models/Cell";
import {Player} from "../../models/Player";
import LostFigures from "../LostFigures/LostFigures";

interface BoardProps {
    board: Board,
    setBoard: (board: Board) => void,
    currentPlayer: Player | null,
    changePlayer: () => void,
}

const BoardComponent: FC<BoardProps> = ({
                                            board,
                                            setBoard, currentPlayer,
                                            changePlayer
                                        }) => {
    const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

    useEffect(() => {
        highlightAvailableCells();
    }, [selectedCell]);

    function clickOnCell(cell: Cell) {
        if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
            selectedCell.moveFigure(cell);
            changePlayer();
            setSelectedCell(null);
            boardUpdate();
        } else {
            if (cell.figure?.color === currentPlayer?.color) {
                setSelectedCell(cell);
            }
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
        <div className={styles.main}>
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
                                                       clickOnCell={clickOnCell}
                                        />
                                    );
                                })
                            }
                        </React.Fragment>
                    )
                }
                <li className={styles.letters}>
                    {
                        ['A', 'B', 'C', 'D', 'I', 'F', 'G', 'H'].map((letter, index) => {
                            return (
                                <ul
                                    key={index}
                                >{letter}</ul>
                            )
                        })
                    }
                </li>
            </div>
            <li className={styles.numbers}>
                {
                    [1, 2, 3, 4, 5, 6, 7, 8].map((num, index) => {
                        return (
                            <ul
                                key={index}
                            >{num}</ul>
                        )
                    })
                }
            </li>
        </div>
    );
};

export default BoardComponent;