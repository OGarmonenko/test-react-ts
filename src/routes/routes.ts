import MainPage from '../components/pages/main/MainPage';
import CardPage from '../components/pages/CardPage';
import constants from '../constants/constants';
import {IRoute} from '../types/types';

const routes: IRoute[] = [
    {
        path: constants.ROUTES.MAIN_PATH,
        name: 'Main Page',
        component: MainPage,
        exact: true,
    },
    {
        path: constants.ROUTES.CARD_PATH + ':recordID',
        name: 'Card Page',
        component: CardPage,
        exact: false,
    },
]

export default routes;