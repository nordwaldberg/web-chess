import React from "react";
import styles from './cell.module.scss';

interface CellProps {
    color: string
}

const Cell = ({ color }: CellProps) => {
    return (
        <div className={`${styles.cell} ${styles[color]}`}>

        </div>
    );
};

export default Cell;