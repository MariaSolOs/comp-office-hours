import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom'; 
import { gql, useQuery } from '@apollo/client';
import { resetCache } from './cache';

import ProtectedPage from './pages/ProtectedPage';
import Navbar from './components/Navbar/Navbar';
import LoginPage from './pages/LoginPage/LoginPage';
import ApptFormPage from './pages/ApptFormPage/ApptFormPage';
import ApptConfirmedPage from './pages/ApptConfirmedPage/ApptConfirmedPage';

const CHECK_TOKEN_VALID = gql`
    query IsTokenValid {
        isTokenValid @client
    }
`;

const App = () => {
    const { data } = useQuery(CHECK_TOKEN_VALID);
    const { isTokenValid } = data;

    useEffect(() => {
        if(!isTokenValid) {
            resetCache();
        }
    }, [isTokenValid]);

    return (
        <>
            <Navbar/>
            <Switch>
                <ProtectedPage path="/booking" Component={ApptFormPage}/>
                <ProtectedPage path="/booking-confirm" Component={ApptConfirmedPage}/>
                <Route component={LoginPage}/>
            </Switch>
        </>
    );
}

// TODO: Add proptypes to all components

export default App;
