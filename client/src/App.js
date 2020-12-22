import React from 'react';
import { Route, Switch } from 'react-router-dom'; 

import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';

const App = (props) => {
    return (
        <>
            <Navbar/>
            <Switch>
                <Route path="/" component={HomePage}/>
            </Switch>
        </>
    );
}

export default App;
