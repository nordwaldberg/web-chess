import React, {FC} from "react";
import styles from './cell.module.scss';
import {Cell} from "../../models/Cell";

interface CellProps {
    cell: Cell,
    selected: boolean,
    selectCell: (cell: Cell) => void,
}

const CellComponent: FC<CellProps> = ({cell, selected, selectCell}) => {
    const isSelectedCell = selected ? styles.selected : '';

    const isAvailableCell = cell.avaliable && !cell.figure ?
        <div className={styles.available}></div> : null;

    const isAvailableForAttackCell = cell.avaliable && cell.figure ?
        <div className={`${styles.availableForAttack}`}></div> : null;

    return (
        <div className={`${styles.cell} ${styles[cell.color]} ${isSelectedCell}`}
            onClick={() => selectCell(cell)}
        >
            {isAvailableForAttackCell || isAvailableCell}
            {cell.figure?.icon && <img src={cell.figure.icon} alt={cell.figure.name}/>}
        </div>
    );
};

export default CellComponent;