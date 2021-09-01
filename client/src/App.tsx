import { useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom'; 
import { useReactiveVar } from '@apollo/client';

import { isLoggedInVar, resetCache } from 'apollo-cache';

import Navbar from 'components/Navbar';
import LoginPage from 'pages/LoginPage';
import ApptFormPage from 'pages/ApptFormPage';
import ApptConfirmedPage from 'pages/ApptConfirmedPage';

import GlobalStyles from 'GlobalStyles';

const App = () => {
    const history = useHistory();
    const isLoggedIn = useReactiveVar(isLoggedInVar);

    // Redirect unauthenticated to the log in form 
    useEffect(() => {
        if (!isLoggedIn) {
            resetCache();
            history.replace('/');
        }
    }, [isLoggedIn, history]);

    return (
        <GlobalStyles>
            <Navbar/>
            <Switch>
                {isLoggedIn &&
                    <>
                        <Route path="/booking-confirm" component={ApptConfirmedPage} />
                        <Route path="/booking" component={ApptFormPage} />
                    </>}
                <Route component={LoginPage} />
            </Switch>
        </GlobalStyles>
    );
}

export default App;
