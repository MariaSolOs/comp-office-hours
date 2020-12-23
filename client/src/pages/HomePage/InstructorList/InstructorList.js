import React, { useCallback } from 'react';

import Card from '@material-ui/core/Card';

import { makeStyles } from '@material-ui/core/styles';
import styles from './InstructorListStyles';
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

const InstructorList = ({ instructors, selectedInst, onInstChange }) => {
    const classes = useStyles();

    const handleSelection = useCallback((instId) => (e) => {
        onInstChange(instId);
    }, [onInstChange]);

    return (
        <div className={classes.list}>
            {instructors.map(inst => (
                <InstructorCard 
                key={inst._id} 
                inst={inst}
                isSelected={inst._id === selectedInst}
                onSelected={handleSelection(inst._id)}/>
            ))}
        </div>
    );
}

export default InstructorList;