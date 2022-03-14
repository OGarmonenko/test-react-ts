import React, {FC, useEffect, useState} from 'react';
import {Record_Props} from '../../../types/types';
import getNumberRecord from '../../../utils/numberUtils';
import getDateRecord from '../../../utils/dateUtils';
import {useParams} from 'react-router-dom';
import Navbar from '../../common/navbar/Navbar';
import styles from './CardPage.module.css';

interface CardPage_Props {
    records: Record_Props[];
}
const CardPage: FC <CardPage_Props> = ({records}) => {
    const [selectRecord, setSelectRecord] = useState<Record_Props>({} as Record_Props);
    const {recordID} = useParams<string>();

    useEffect(()=> {
        setSelectRecord(records.filter(r => r.id === Number(recordID))[0]);
    }, [recordID]);


    return (
        <div>
            <Navbar />
            <div className={styles.title}>Selected Record: </div>
            {Object.keys(selectRecord).length &&
              <div className={ styles.wrapperCard }>
                <div>
                  <p className={ styles.subTitle }> Record:</p>
                  <span className={ styles.dataRecord }> { selectRecord.item } </span>
                </div>
                <div>
                  <p className={ styles.subTitle }> Number: </p>
                  <span className={ styles.dataRecord }> { getNumberRecord(selectRecord.item) || 'no numbers' } </span>
                </div>
                <div>
                  <p className={ styles.subTitle}> Date: </p>
                   <span className={ styles.dataRecord }> { getDateRecord(selectRecord.date) } </span>
                </div>
              </div>
            }
        </div>
    );
};

export default CardPage;