import React, {FC} from 'react';
import {Record_Props} from '../../types/types';
import Header from '../common/header/Header';
import Content from '../toMainPage/Content';

interface ManePage_Props {
    setData :(records: Record_Props[]) => void;
    records: Record_Props[];
}

const MainPage: FC <ManePage_Props> = ({setData, records}) => {

    const addRecord = (record: Record_Props) => {
        setData([...records, record])
    };

    const removeRecord = (record: Record_Props) => {
        setData(records.filter(r => r.id !== record.id));
    };

    return (
        <div>
            <Header handleClickAdd={addRecord} />
            <Content records={records} onClickDelete={removeRecord} />
        </div>
    );
};

export default MainPage;