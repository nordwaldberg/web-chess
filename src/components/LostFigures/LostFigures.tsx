import React, {FC} from 'react';
import {Figure} from "../../models/figures-models/Figure";
import styles from './lost-figures.module.scss';

interface LostFiguresProps {
    title: string,
    figures: Figure[],
}

const LostFigures: FC<LostFiguresProps> = ({ title, figures}) => {
    return (
        <div className={styles.lostFigureInfoBoard}>
            <h2 className={styles.title}>{title}</h2>
            {figures.map(figure => {
                return (
                  <div key={figure.id}
                       className={styles.lostFigureInfo}
                  >
                      {`Player lost ${figure.name}`}
                      <img src={figure.icon} alt={figure.name}/>
                  </div>
                );
            })}
        </div>
    );
};

export default LostFigures;