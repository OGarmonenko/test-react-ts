import moment from 'moment';
import {Record_Props} from '../types/types';

export default function getDateRecord(record: Record_Props) {
    return moment(record.date).format('DD/MM/YYYY - h:mm:ss')
}

