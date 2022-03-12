import React, {FC} from 'react';
import List from './List';
import styles from  './Content.module.css';
import {Record_Props} from '../../types/types';

interface Content_Prop {
  records: Record_Props[];
  onClickDelete:(record: Record_Props) => void;
}

const Content: FC <Content_Prop> = ({records, onClickDelete}) => {

  const setRecord = (record: Record_Props) => {
   onClickDelete(record);
  };

  return (
    <div className={ styles.wrapperContent }>
      {!records.length
        ? <p className={ styles.textError }>Not records</p>
        : <List records={ records } title={ "Current records:" } getRecord={ setRecord }/>
      }
    </div>
  );
};

export default Content;