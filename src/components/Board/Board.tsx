import React, {FC} from "react";
import styles from './board.module.scss';
import Cell from "../Cell/Cell";
import {BoardModel} from "../../models/BoardModel";

interface BoardProps {
    board: BoardModel,
    setBoard: (board: BoardModel) => void,
}

const Board: FC<BoardProps> = ({board, setBoard}) => {
    return (
        <div className={styles.board}>
            {
                board.cells.map((row, index) =>
                    <React.Fragment key={index}>
                        {
                            row.map((cell) =>
                                <Cell cell={cell} key={cell.id}/>
                            )
                        }
                    </React.Fragment>
                )
            }
        </div>
    );
};

export default Board;