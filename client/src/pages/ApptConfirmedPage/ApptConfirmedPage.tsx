import React from 'react';
import { useLocation } from 'react-router-dom';
import { resetCache } from '../../cache';
import { ConfirmationInfo } from '../../models';

import InstructorCard from '../../components/InstructorCard/InstructorCard';
import Footer from '../../components/Footer/Footer';

import { makeStyles } from '@material-ui/core/styles';
import styles from './ApptConfirmedPageStyles';
const useStyles = makeStyles(styles);

const ApptConfirmedPage = () => {
    const classes = useStyles();

    const { state } = useLocation<ConfirmationInfo>();
    const { instructor, date, timeslot, studentEmail } = state;

    const handleRedirect = () => {
        resetCache();
        window.location.replace('https://mycourses2.mcgill.ca/d2l/loginh/');
    }

    return (
        <>
            <div className={classes.container}>
                <h1 className={classes.title}>Your appointment was booked!</h1>
                <div className={classes.zoomInfo}>
                    <img
                    alt="Zoom icon"
                    src={`https://res.cloudinary.com/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_100/v1609199578/COMP202-OHBA/zoom-icon.png`}/>
                    <p>Check {studentEmail} for the Zoom link.</p>
                </div>
                <div className={classes.summary}>
                    <div className={classes.card}>
                        <InstructorCard
                        inst={instructor}
                        isSelected={false}/>
                    </div>
                    <div className={classes.details}>
                        <p>Date: {date}</p>
                        <p>Time (EST time): {timeslot}</p>
                    </div>
                    <button
                    className={classes.redirectButton}
                    onClick={handleRedirect}>
                        Go back to MyCourses
                    </button>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default ApptConfirmedPage;