import React, {FC, useRef, useState} from 'react';
import styles from './timer.module.scss';

interface TimerProps {
    restart: () => void,
}

const Timer: FC<TimerProps> = ({restart}) => {
    const [blackTime, setBlackTime] = useState(300);
    const [whiteTime, setWhiteTime] = useState(300);
    const [whiteTimeStarted, setWhiteTimeStarted] = useState(false);
    const [blackTimeStarted, setBlackTimeStarted] = useState(false);

    const timer = useRef<null | ReturnType<typeof setInterval>>(null);

    function decrementBlackTime() {
        timer.current = setInterval(() => {
            setBlackTime(prev => prev - 1);
        }, 1000);
    }

    function handleBlackBtn() {
        if (blackTimeStarted && timer.current) {
            clearInterval(timer.current);
        } else {
            decrementBlackTime();
        }

        setBlackTimeStarted(prev => !prev);
    }

    function decrementWhiteTime() {
        timer.current = setInterval(() => {
            setWhiteTime(prev => prev - 1);
        }, 1000);
    }

    function handleWhiteBtn() {
        if (whiteTimeStarted && timer.current) {
            clearInterval(timer.current);
        } else {
            decrementWhiteTime();
        }

        setWhiteTimeStarted(prev => !prev);
    }

    function handleRestart() {
        setBlackTime(300);
        setWhiteTime(300);
        setBlackTimeStarted(false);
        setWhiteTimeStarted(false);
        restart();
    }

    return (
        <div className={styles.timer}>
            <h2 className={styles.titles}>{`Black's time: ${blackTime}`}</h2>
            <h2 className={styles.titles}>{`White's time: ${whiteTime}`}</h2>
            <div className={styles.timerButtons}>
                <button className={styles.timerBtn}
                        onClick={handleBlackBtn}>
                    Set Black Player's Time
                </button>
                <button className={styles.timerBtn}
                        onClick={handleWhiteBtn}>
                    Set White Player's Time
                </button>
                <button className={styles.timerBtn}
                        onClick={handleRestart}>Restart</button>
            </div>
        </div>
    );
};

export default Timer;