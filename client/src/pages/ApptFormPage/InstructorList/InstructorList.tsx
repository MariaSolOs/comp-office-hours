import React, { useCallback } from 'react';
import { Instructor } from '../../../models';

import Switch from '@material-ui/core/Switch';
import InstructorCard from '../../../components/InstructorCard/InstructorCard';

import { makeStyles } from '@material-ui/core/styles';
import styles from './InstructorListStyles';
const useStyles = makeStyles(styles);

type Props = {
    instructors: Instructor[];
    selectedInst: Instructor;
    useAnyInst: boolean;
    onInstChange: (inst: Instructor) => void;
    onAnyInst: (e: Event) => void;
 }

const InstructorList = (props: Props) => {
    const classes = useStyles();

    const handleSelection = useCallback((inst) => () => {
        props.onInstChange(inst);
    }, [props.onInstChange]);

    const handleSwitch = useCallback((e) => {
        props.onAnyInst(e);
    }, [props.onAnyInst]);

    return (
        <div className={classes.list}>
            <div className={classes.switchBox}>
                <Switch checked={props.useAnyInst} onChange={handleSwitch}/>
                <p className="switch-text">Anyone is fine.</p>
            </div>
            {props.instructors.map(inst => (
                <div key={inst._id} className={classes.cardWrapper}>
                    <InstructorCard 
                    inst={inst}
                    isSelected={props.selectedInst && 
                               (inst._id === props.selectedInst._id)}
                    onSelected={handleSelection(inst)}/>
                </div>
            ))}
        </div>
    );
}

export default InstructorList;