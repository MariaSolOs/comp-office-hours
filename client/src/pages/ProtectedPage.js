import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ Component, ...rest }) => {
    const token = localStorage.getItem('token');

    return (
        <Route { ...rest } 
        render={(props) => (
            token !== null? 
                <Component { ...props }/> : 
                <Redirect to="/login"/>
        )}/>
    );
}

export default PrivateRoute;