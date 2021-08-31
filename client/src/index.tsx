import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider, ApolloClient, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import { cache, TOKEN_KEY } from 'apollo-cache';

import App from './App';

const httpLink = createHttpLink({
    uri: `${process.env.REACT_APP_SERVER_URL}/graphql`
});

const authLink = setContext((_, { headers }) => {
    const emailToken = sessionStorage.getItem(TOKEN_KEY);
    return {
        headers: {
            ...headers, 
            authorization: emailToken || '',
        }
    }
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache
});

ReactDOM.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ApolloProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
