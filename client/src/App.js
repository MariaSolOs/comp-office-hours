import React from 'react';
import { Route, Switch } from 'react-router-dom'; 

import ProtectedPage from './pages/ProtectedPage';
import Navbar from './components/Navbar/Navbar';
import LoginPage from './pages/LoginPage/LoginPage';
import ApptFormPage from './pages/ApptFormPage/ApptFormPage';

const App = () => {
    return (
        <>
            <Navbar/>
            <Switch>
                <ProtectedPage path="/booking" Component={ApptFormPage}/>
                <Route component={LoginPage}/>
            </Switch>
        </>
    );
}

// TODO: Add proptypes to all components

export default App;
