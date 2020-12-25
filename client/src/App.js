import React from 'react';
import { Route, Switch } from 'react-router-dom'; 

import Navbar from './components/Navbar/Navbar';
import LoginPage from './pages/LoginPage/LoginPage';
import ApptFormPage from './pages/ApptFormPage/ApptFormPage';

const App = (props) => {
    return (
        <>
            <Navbar/>
            <Switch>
                <Route path="/login" component={LoginPage}/>
                <Route path="/" component={ApptFormPage}/>
            </Switch>
        </>
    );
}

// TODO: Add proptypes to all components

export default App;
