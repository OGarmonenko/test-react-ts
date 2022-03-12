import React, {FC} from 'react';
import CustomButton from '../custom/button/CustomButton';
import styles from './ListItem.module.css';
import {Record_Props} from '../../types/types';
import getNumberRecord from '../../utils/numberUtils';
import {useNavigate} from 'react-router-dom';
import constants from '../../constants/constants';
import getDateRecord from '../../utils/dateUtils';

interface ListItem_Props {
    record: Record_Props;
    selectRecord:(record: Record_Props) => void;
}

const ListItem: FC <ListItem_Props> = ({record, selectRecord}) => {
    let history = useNavigate();

    const handleClickButton = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        selectRecord(record);
    };

    const handleClickRow = () => {
        history(constants.ROUTES.CARD_PATH+`${record.id}`);
    };

  return (
    <li className={ styles.wrapperLi }>
      <div className={ styles.wrapperRecord } onClick={handleClickRow}>
        <p className={ styles.textRecord }>{ record.item }</p>
          <p className={ styles.numberRecord }>{ getNumberRecord(record.item) }</p>
          <p className={ styles.dateRecord }>{ getDateRecord(record) }</p>
          <CustomButton onClick={handleClickButton} >Delete</CustomButton>
      </div>
    </li>
  );
};

export default ListItem;