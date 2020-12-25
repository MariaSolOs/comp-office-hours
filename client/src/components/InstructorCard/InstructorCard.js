import React from 'react';

import Card from '@material-ui/core/Card';

import { makeStyles } from '@material-ui/core/styles';
import styles from './InstructorCardStyles';
const useStyles = makeStyles(styles);

const InstructorCard = React.memo(({ inst, isSelected, onSelected }) => {
    const classes = useStyles({ isSelected });

    return (
        <Card 
        className={classes.cardRoot} 
        variant="elevation"
        onClick={onSelected}>
            <div className={classes.instDetails}>
                <h4 className="inst-name">
                    {inst.name}
                </h4>
                <p className="inst-role">{inst.role}</p>
                <p className="inst-langs">Speaks: {inst.languages.join(', ')}</p>
            </div>
            <img 
            src={inst.photo} 
            alt={inst.name}
            className={classes.instPhoto}/>
        </Card>
    );
}, (prevProps, nextProps) => (
    prevProps.inst._id === nextProps.inst._id && 
    prevProps.isSelected === nextProps.isSelected
));

export default InstructorCard;