import './App.css';
import React, {useState} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import MainPage from './components/pages/MainPage';
import CardPage from './components/pages/cardPage/CardPage';
import {Record_Props} from './types/types';
import constants from './constants/constants'
import ErrorPage from "./components/pages/errorPage/ErrorPage";

export interface IRoute {
    path: string;
    name: string;
    exact: boolean;
    element: any;
    component: any;
    props?: any;
};

const App = ()=> {
    const [state, setState] = useState<Record_Props[]>([]);

    return (
        <BrowserRouter>
                <Routes>
                <Route path={constants.ROUTES.MAIN_PATH}
                       element={ <MainPage setData={(item: Record_Props[]) => setState(item)} records={state}/> }
                />
                <Route path={constants.ROUTES.CARD_PATH + ':recordID'} element={ <CardPage records={state} /> } />
                <Route path={constants.ROUTES.ERROR_PATH} element={<ErrorPage />}/>
                </Routes>
        </BrowserRouter>
    )
}

export default App;