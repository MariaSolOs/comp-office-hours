import { InMemoryCache, makeVar } from '@apollo/client';

export const TOKEN_KEY = 'ohba-email-token';

export const isLoggedInVar = makeVar(Boolean(sessionStorage.getItem(TOKEN_KEY)));

export const cache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                isLoggedIn: {
                    read() {
                        return isLoggedInVar();
                    }
                }
            }
        }
    }
});

export const initCache = (email: string) => {
    sessionStorage.setItem(TOKEN_KEY, email);
    isLoggedInVar(true);
}

export const resetCache = () => {
    sessionStorage.removeItem(TOKEN_KEY);
    isLoggedInVar(false);
}
