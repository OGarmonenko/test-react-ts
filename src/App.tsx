import './App.css';
import Header from './components/common/header/Header';
import Content from './components/toMainPage/Content';
import React, {FC, useState} from 'react';
import {Record_Props} from "./types/types";

const App: FC = ()=> {
    const [records, setRecords] = useState<Record_Props[]>([]);

    const addRecord = (record: Record_Props) => {
        setRecords([...records, record]);
    };

    const removeRecord5 = (record: Record_Props) => {
        setRecords(records.filter(r => r.id !== record.id));
    };

    return (
        <div>
              <Header addRecord={addRecord} />
              <Content records={records} removeRecord4={removeRecord5}  />
        </div>
    );
}

export default App;