import React, {useState, FC} from 'react';
import CustomButton from '../../custom/button/CustomButton';
import CustomInput from '../../custom/input/CustomInput';
import * as moment from 'moment';
import styles from './Header.module.css';
import {Record_Props} from "../../../types/types";

interface Header_Props {
    handleClickAdd:(record: Record_Props) => void;
}

const Header: FC <Header_Props>= ({handleClickAdd}) => {
  const [record, setRecord] = useState<string>('');

  const createRecord = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      const date: number = moment.now()
      const newRecord: Record_Props = {
          id: date,
          item: record,
          date: date,
        };
      handleClickAdd(newRecord);
    setRecord('');
  };

  return (
    <form className={ styles.wrapperHeader } >
      <CustomInput type={ "text" } placeholder={ "Enter record..." } value={ record } onChange={e => setRecord(e.target.value)} />
      <CustomButton disabled={ !record.length } onClick={createRecord}> Add </CustomButton >
    </form>
  );
};

export default Header;