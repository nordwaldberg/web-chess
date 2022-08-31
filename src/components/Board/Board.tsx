import React from "react";
import styles from './board.module.scss';
import Cell from "../Cell/Cell";

const Board = () => {
    return (
      <div className={styles.board}>
        <Cell color="black"></Cell>
        <Cell color="white"></Cell>
        <Cell color="black"></Cell>
        <Cell color="white"></Cell>
      </div>
    );
};

export default Board;