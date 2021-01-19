import React, { useCallback } from 'react';

import Switch from '@material-ui/core/Switch';
import InstructorCard from '../../../components/InstructorCard/InstructorCard';

import { makeStyles } from '@material-ui/core/styles';
import styles from './InstructorListStyles';
const useStyles = makeStyles(styles);

const InstructorList = ({ instructors, selectedInst, onInstChange, 
                          useAnyInst, onAnyInst }) => {
    const classes = useStyles();

    const handleSelection = useCallback((inst) => () => {
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
                <div key={inst._id} className={classes.cardWrapper}>
                    <InstructorCard 
                    inst={inst}
                    isSelected={selectedInst && (inst._id === selectedInst._id)}
                    onSelected={handleSelection(inst)}/>
                </div>
            ))}
        </div>
    );
}

export default InstructorList;