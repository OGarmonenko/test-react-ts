import React, {FC, useEffect, useState} from 'react';
import {Record_Props} from '../../types/types';
import Navbar from '../common/navbar/Navbar';
import CardItem from '../toCardPage/CardItem';
import {storeService} from '../../store/storeService';

const CardPage: FC = () => {
    const [selectedRecord, setSelectedRecord] = useState<Record_Props | null>(null);

    useEffect(()=> {
        try {
            const result: Record_Props = storeService.getRecord();
            setSelectedRecord(result);
        } catch (e) {
            console.error('Error get data');
        }
    },[])

    return (
        <div>
            <Navbar />
            {selectedRecord && <CardItem selectedRecord={selectedRecord}/>}
        </div>
    );
};

export default CardPage;