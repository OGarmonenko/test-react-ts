import React, {FC} from 'react';
import {Link} from 'react-router-dom';
import constants from '../../../constants/constants';
import styles from './Navbar.module.css';

const Navbar: FC = () => {

    return (
        <div className={styles.wrapperNavbar}>
            <Link className={ styles.link } to={ constants.ROUTES.MAIN_PATH } > Main </Link>
        </div>
    );
};

export default Navbar;