import React, {FC} from "react";
import styles from './cell.module.scss';
import {CellModel} from "../../models/CellModel";

interface CellProps {
    cell: CellModel,
}

const Cell: FC<CellProps> = ({cell}) => {
    return (
        <div className={`${styles.cell} ${styles[cell.color]}`}></div>
    );
};

export default Cell;