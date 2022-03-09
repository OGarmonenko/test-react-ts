import React, {FC} from 'react';
import CustomButton from '../custom/button/CustomButton';
import styles from './ListItem.module.css';
import moment from 'moment';
import {Record_Props} from "../../types/types";
import getNumberRecord from "../../utils/numberUtils";

interface ListItem_Props {
    record: Record_Props;
    selectRecord:(record: Record_Props) => void;
}

const ListItem: FC <ListItem_Props> = ({record, selectRecord}) => {

    const handleClick = () => {
        selectRecord(record);
    }

  return (
    <li className={ styles.wrapperLi }>
      <div className={ styles.wrapperRecord }>
        <p className={ styles.textRecord }>{ record.item }</p>
          <p className={ styles.numberRecord }>{ getNumberRecord(record.item) }</p>
          <p className={ styles.dateRecord }>{ moment(record.date).format('DD/MM/YYYY - h:mm:ss') }</p>
          <CustomButton onClick={handleClick} >Delete</CustomButton>
      </div>
    </li>
  );
};

export default ListItem;