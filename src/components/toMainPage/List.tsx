import React, {FC} from 'react';
import styles from './List.module.css';
import ListItem from './ListItem';
import {Record_Props} from '../../types/types';

interface List_Props {
    records: Record_Props[];
    title: string;
    getRecord:(record: Record_Props) => void;
}

const List: FC <List_Props> = ({records, title, getRecord }) => {

    const onClickRecord = (record: Record_Props) => {
        getRecord(record)
    }

  return (
    <div className={ styles.wrapperList }>
      <span className={ styles.titleList }>{ title }</span>
      <div className={ styles.wrapperListItem } >
      <ol className={ styles.list }>
      {records.map((record) =>
        <ListItem record={ record } key={ record.id } selectRecord={ onClickRecord }  />
      )}
      </ol>
      </div>
    </div>
  );
};




export default List;