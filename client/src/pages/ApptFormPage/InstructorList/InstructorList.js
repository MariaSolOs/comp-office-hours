import React, { useCallback } from 'react';

import Switch from '@material-ui/core/Switch';
import InstructorCard from '../../../components/InstructorCard/InstructorCard';

import { makeStyles } from '@material-ui/core/styles';
import styles from './InstructorListStyles';
const useStyles = makeStyles(styles);

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