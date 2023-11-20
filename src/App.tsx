import React, {useEffect, useState} from 'react';
import styles from './App.module.scss';
import BoardComponent from "./components/Board/BoardComponent";
import {Board} from "./models/Board";
import {Player} from "./models/Player";
import {Colors} from "./models/Colors";
import LostFigures from "./components/LostFigures/LostFigures";
import Timer from "./components/Timer/Timer";

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
        setCurrentPlayer(whitePlayer);
    }

    return (
        <div className={styles.app}>
            <div className={styles.info}>
                <h2 className={styles.infoBoardTitle}>{`Current Player is: ${
                    currentPlayer?.color === 'white' ?
                        'White' : 'Black'
                }`}</h2>
                <div className={styles.timer}>
                    <Timer restart={restart}/>
                </div>
            </div>
            <BoardComponent board={board}
                            setBoard={setBoard}
                            currentPlayer={currentPlayer}
                            changePlayer={changePlayer}
            />
            <div className={styles.lostFiguresInfoBoard}>
                <LostFigures title={'Black player lost:'} figures={board.lostBlackFigures}/>
                <LostFigures title={'White player lost:'} figures={board.lostWhiteFigures}/>
            </div>
        </div>
    );
}

export default App;
