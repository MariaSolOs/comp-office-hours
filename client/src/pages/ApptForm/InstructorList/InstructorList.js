import React, { useCallback } from 'react';

import Switch from '@material-ui/core/Switch';
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

const InstructorList = ({ instructors, selectedInst, onInstChange, 
                          useAnyInst, onAnyInst }) => {
    const classes = useStyles();

    const handleSelection = useCallback((inst) => (e) => {
        onInstChange(inst);
    }, [onInstChange]);

    const handleSwitch = useCallback((e) => {
        onAnyInst(e);
    }, [onAnyInst]);

    return (
        <div className={classes.list}>
            <div className={classes.switchBox}>
                <Switch checked={useAnyInst} onChange={handleSwitch}/>
                <p className="switch-text">Anyone is fine.</p>
            </div>
            {instructors.map(inst => (
                <InstructorCard 
                key={inst.id} 
                inst={inst}
                isSelected={selectedInst && (inst.id === selectedInst.id)}
                onSelected={handleSelection(inst)}/>
            ))}
        </div>
    );
}

export default InstructorList;