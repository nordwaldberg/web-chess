import React, {useEffect, useState} from 'react';
import styles from './App.module.scss';
import BoardComponent from "./components/Board/BoardComponent";
import {Board} from "./models/Board";
import {Player} from "./models/Player";
import {Colors} from "./models/Colors";

function App() {
    const [board, setBoard] = useState(new Board());
    const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK));
    const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE));
    const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);

    useEffect(() => {
        restart();
        setCurrentPlayer(whitePlayer);
    }, []);

    function changePlayer() {
        setCurrentPlayer(currentPlayer?.color === Colors.BLACK? whitePlayer : blackPlayer);
    }

    function restart() {
        const newBoard = new Board();
        newBoard.InitCells();
        newBoard.addFigures();
        setBoard(newBoard);
    }

    return (
        <div className={styles.app}>
            <BoardComponent board={board}
                            setBoard={setBoard}
                            currentPlayer={currentPlayer}
                            changePlayer={changePlayer}
            />
        </div>
    );
}

export default App;
