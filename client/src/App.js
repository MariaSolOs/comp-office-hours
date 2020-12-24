import React from 'react';
import { Route, Switch } from 'react-router-dom'; 

import Navbar from './components/Navbar/Navbar';
import ApptForm from './pages/ApptForm/ApptForm';

const App = (props) => {
    return (
        <>
            <Navbar/>
            <Switch>
                <Route path="/" component={ApptForm}/>
            </Switch>
        </>
    );
}

// TODO: Add proptypes to all components

export default App;
