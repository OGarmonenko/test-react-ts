import React, {FC, useEffect, useState} from 'react';
import {Record_Props} from '../../types/types';
import {useParams} from 'react-router-dom';
import Navbar from '../common/navbar/Navbar';
import CardItem from '../toCardPage/CardItem';

interface CardPage_Props {
    records: Record_Props[];
}

const CardPage: FC <CardPage_Props> = ({records}) => {
    const [selectRecord, setSelectRecord] = useState<Record_Props | null>(null);
    const {recordID} = useParams<string>();

    useEffect(()=> {
        setSelectRecord(records.filter(r => r.id === Number(recordID))[0]);
    }, [])
;

    return (
        <div>
            <Navbar />
            {selectRecord && <CardItem selectRecord={selectRecord}/>}
        </div>
    );
};

export default CardPage;