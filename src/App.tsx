import React, {useEffect, useState} from 'react';
import styles from './App.module.scss';
import BoardComponent from "./components/Board/BoardComponent";
import {Board} from "./models/Board";

function App() {
    const [board, setBoard] = useState(new Board());

    useEffect(() => {
        restart();
    }, []);

    function restart() {
        const newBoard = new Board();
        newBoard.InitCells();
        newBoard.addFigures();
        setBoard(newBoard);
    }

    return (
        <div className={styles.app}>
            <BoardComponent board={board} setBoard={setBoard}/>
        </div>
    );
}

export default App;
