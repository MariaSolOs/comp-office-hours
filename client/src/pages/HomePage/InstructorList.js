import React from 'react';

import Card from '@material-ui/core/Card';

import { makeStyles } from '@material-ui/core/styles';
import { instructorsStyles } from './HomePageStyles';
const useStyles = makeStyles(instructorsStyles);

const InstructorList = ({ instructors }) => {
    const classes = useStyles();

    console.log(instructors)

    return (
        <div className={classes.instSection}>
            <h3>Who would you like to see?</h3>
            <div className={classes.instList}>
                {instructors.map(inst => (
                    <Card 
                    key={inst._id} 
                    className={classes.cardRoot}
                    variant="elevation">
                        <div className={classes.instDetails}>
                            <h4 className="inst-name">
                                {inst.name}
                            </h4>
                        </div>
                        <img 
                        src={inst.photo} 
                        alt={inst.name}
                        className={classes.instPhoto}/>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default InstructorList;