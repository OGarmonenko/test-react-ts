import React, {FC} from 'react';
import styles from './CardItem.module.css';
import getNumberRecord from '../../utils/numberUtils';
import getDateRecord from '../../utils/dateUtils';
import {Record_Props} from '../../types/types';

interface CardItem_Props {
    selectRecord: Record_Props;
}

const CardItem: FC <CardItem_Props> = ({selectRecord}) => {

    return (
        <>
        <div className={styles.title}>Selected</div>
        <div className={ styles.wrapperCard }>
            <div className={ styles.cardRow }>
                <p className={ styles.subTitle }> Record:</p>
                <span className={ styles.dataRecord }> { selectRecord.item } </span>
            </div>
            <div className={ styles.cardRow }>
                <p className={ styles.subTitle }> Number: </p>
                <span className={ styles.dataRecord }> { getNumberRecord(selectRecord.item) || 'no numbers' } </span>
            </div>
            <div className={ styles.cardRow }>
                <p className={ styles.subTitle}> Date: </p>
                <span className={ styles.dataRecord }> { getDateRecord(selectRecord.date) } </span>
            </div>
        </div>
        </>
    );
};

export default CardItem;