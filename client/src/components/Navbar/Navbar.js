import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import styles from './NavbarStyles';
const useStyles = makeStyles(styles);

const Navbar = () => {
    const classes = useStyles();

    return (
        <div className={classes.bar}>
            <h2 className={classes.barTitle}>
                COMP202: Foundations of Programming
            </h2>
        </div>
    );
}

export default Navbar;