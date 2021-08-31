import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import styles from './FooterStyles';
const useStyles = makeStyles(styles);

const Footer = () => {
    const classes = useStyles();

    return (
        <div className={classes.footer}>
            <p className={classes.message}>
                Encountered technical issues? Please 
                <a 
                href="mailto:maria.solano@mail.mcgill.ca" 
                className="email-link">
                    let us know
                </a>.
            </p>
        </div>
    );
}

export default React.memo(Footer);