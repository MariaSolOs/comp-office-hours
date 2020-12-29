import { InMemoryCache, makeVar } from '@apollo/client';

export const isLoggedInVar = makeVar(!!localStorage.getItem('token'));

export const cache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                isLoggedIn: {
                    read() {
                        return isLoggedInVar();
                    }
                },

                isTokenValid: {
                    read() {
                        const expireTime = localStorage.getItem('expire_time');
                        return +new Date(expireTime) > new Date();
                    }
                }
            }
        }
    }
});

export const initCache = (token) => {
    const inOneHour = new Date(new Date().setHours(new Date().getHours() + 1));
    localStorage.setItem('token', token);
    localStorage.setItem('expire_time', inOneHour);
    isLoggedInVar(true);
}

export const resetCache = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expire_time');
    isLoggedInVar(false);
}
