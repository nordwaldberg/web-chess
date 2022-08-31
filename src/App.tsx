import React, {useEffect, useState} from 'react';
import styles from './App.module.scss';
import Board from "./components/Board/Board";
import {BoardModel} from "./models/BoardModel";

function App() {
    const [board, setBoard] = useState(new BoardModel());

    useEffect(() => {
        restart();
    }, []);

    function restart() {
        const newBoard = new BoardModel();
        newBoard.InitCells();
        newBoard.addFigures();
        setBoard(newBoard);
    }

    return (
        <div className={styles.app}>
            <Board board={board} setBoard={setBoard}/>
        </div>
    );
}

export default App;
