import React from 'react';
import { useLocation } from 'react-router-dom';

import InstructorCard from '../../components/InstructorCard/InstructorCard';

import { makeStyles } from '@material-ui/core/styles';
import styles from './ApptConfirmedPageStyles';
const useStyles = makeStyles(styles);

const ApptConfirmedPage = () => {
    const classes = useStyles();

    const { state } = useLocation();
    const { instructor, date, timeslot, studentEmail } = state;

    return (
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
                    isSelected={false}
                    onSelected={() => {}}/>
                </div>
                <div className={classes.details}>
                    <p>Date: {date}</p>
                    <p>Time (EST time): {timeslot}</p>
                </div>
            </div>
        </div>
    );
}

export default ApptConfirmedPage;