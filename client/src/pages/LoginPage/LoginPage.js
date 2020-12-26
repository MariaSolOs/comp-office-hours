import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';

import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';

import { makeStyles } from '@material-ui/core/styles';
import styles from './LoginPageStyles';
const useStyles = makeStyles(styles);

const LOGIN_USER = gql`
    mutation LoginUser($email: String!) {
        login(email: $email) {
            token
        }
    }
`;

const EMAIL_REGEX = /(@mail\.mcgill\.ca|@mcgill.ca)$/;

const LoginPage = () => {
    const classes = useStyles();

    const history = useHistory();

    const [email, setEmail] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const [login, { loading, error }] = useMutation(LOGIN_USER, {
        onCompleted: ({ login }) => {
            localStorage.setItem('token', login.token);
            history.push('/booking');
        }
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!EMAIL_REGEX.test(email)) {
            setErrMsg('Invalid email');
            return;
        }
        login({ variables: { email } });
    }

    return (
        <div className={classes.container}>
            <h2 className={classes.title}>
                Office Hours by Appointment
            </h2>
            <h4>Please log in to continue.</h4>
            <Paper className={classes.paper}>
                {loading? 
                    'Loading...' : 
                    error? 
                        'Something went wrong.' :
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="email" className={classes.formLabel}>
                                McGill email address
                            </label>
                            <InputBase
                            id="email" 
                            aria-describedby="McGill email"
                            value={email}
                            onChange={handleEmailChange}
                            required
                            fullWidth
                            className={classes.input}
                            error={Boolean(errMsg)}/>
                            {errMsg && 
                                <span className={classes.errMsg}>{errMsg}</span>}
                            <button type="submit" className={classes.submitButton}>
                                Log in
                            </button>
                        </form>}
            </Paper>
        </div>
    );
}

export default LoginPage;