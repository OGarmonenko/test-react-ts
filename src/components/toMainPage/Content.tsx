import React, {FC} from 'react';
import List from './List';
import styles from  './Content.module.css';
import {Record_Props} from "../../types/types";

interface Content_Prop {
  records: Record_Props[];
  removeRecord4:(record: Record_Props) => void;
}

const Content: FC <Content_Prop> = ({records, removeRecord4}) => {

  const removeRecord3 = (record: Record_Props) => {
    removeRecord4(record)
  }
  return (
    <div className={ styles.wrapperContent }>
      {!records.length
        ? <p className={ styles.textError }>Not records</p>
        : <List records={ records } title={ "Current records:" } removeRecord2={ removeRecord3 }/>
      }
    </div>
  );
};

export default Content;