import { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { gql, useLazyQuery } from '@apollo/client';

const IS_LOGGED_IN = gql`
    query IsUserLoggedIn {
        isLoggedIn @client
    }
`;

const ProtectedPage = ({ Component, ...rest }: any) => {
    const [checkLogIn, { data }] = useLazyQuery(IS_LOGGED_IN);

    useEffect(() => {
        checkLogIn();
    }, [checkLogIn]);

    return (
        <>
        {data && 
            <Route { ...rest } 
            render={(props) => (
                data.isLoggedIn? 
                    <Component { ...props }/> : 
                    <Redirect to="/login"/>
            )}/>}
        </>
    );
}

export default ProtectedPage;