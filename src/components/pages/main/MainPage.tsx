import React, {FC, useEffect, useState} from 'react';
import {Record_Props} from '../../../types/types';
import Header from '../../common/header/Header';
import {storeService} from '../../../store/storeService';
import styles from './Content.module.css';
import List from '../../toMainPage/List';

const MainPage: FC = () => {
    const [records, setRecords] = useState<Record_Props[]>([]);
    const [flag, setFlag] = useState<boolean>(false);

    useEffect(()=> {
        try {
            const result: Record_Props[] = storeService.getRecords();
            setRecords(result);
            setFlag(!flag);
        } catch (e) {
            console.error('Error get data');
        }
    },[])

    const addRecord = (record: Record_Props) => {
        try {
            const result: Record_Props[] = storeService.addRecord(record);
            setRecords(result);
            setFlag(!flag);
        } catch (e) {
            console.error('Error get data');
        }
    };

    const removeRecord = (record: Record_Props) => {
        try {
            const result: Record_Props[] = storeService.removeRecord(record);
            setRecords(result);
            setFlag(!flag);
        } catch (e) {
            console.error('Error get data');
        }
    };

    return (
        <div>
            <Header handleClickAdd={addRecord} />
            <div className={ styles.wrapperContent }>
                {!records.length
                    ? <p className={ styles.textError }>Not records</p>
                    : <List  title={ "Current records:" } records={records} removeRecord={removeRecord}/>
                }
            </div>
        </div>
    );
};

export default MainPage;