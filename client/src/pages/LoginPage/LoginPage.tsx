import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { initCache } from 'apollo-cache';

import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';

import { makeStyles } from '@material-ui/core/styles';
import styles from './LoginPageStyles';
const useStyles = makeStyles(styles);

const EMAIL_REGEX = /(@mail\.mcgill\.ca|@mcgill.ca)$/;

const LoginPage = () => {
    const history = useHistory();
    const classes = useStyles();

    const [email, setEmail] = useState('');
    const [showError, setShowError] = useState(false);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if (!EMAIL_REGEX.test(email)) {
            setShowError(true);
            return;
        }

        initCache(email);
        history.push('/booking');
    }

    return (
        <div className={classes.container}>
            <h2 className={classes.title}>
                Office Hours by Appointment
            </h2>
            <h4>Please log in to continue.</h4>
            <Paper className={classes.paper}>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email" className={classes.formLabel}>
                        McGill email address
                    </label>
                    <InputBase
                    id="email" 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                    fullWidth
                    className={classes.input}
                    error={showError} />
                    {showError && 
                        <span className={classes.errMsg}>Invalid email</span>}
                    <button type="submit" className={classes.submitButton}>
                        Log in
                    </button>
                </form>
            </Paper>
        </div>
    );
}

export default LoginPage;