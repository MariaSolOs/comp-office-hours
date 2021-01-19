import React from 'react';
import { Instructor, InstructorRole } from '../../models';

import Card from '@material-ui/core/Card';

import { makeStyles } from '@material-ui/core/styles';
import styles from './InstructorCardStyles';
const useStyles = makeStyles(styles);

const parseRole = (role: InstructorRole) => {
    let parsed;
    switch(role) {
        case InstructorRole.INSTRUCTOR:
            parsed = 'Instructor'
            break;
        case InstructorRole.TA:
            parsed = 'TA'
            break;
        case InstructorRole.TEAM_MENTOR:
            parsed = 'TEAM mentor'
            break;
        default: parsed = '';
    }
    return parsed;
}

type InstructorCardProps = {
    inst: Instructor;
    isSelected: boolean;
    onSelected: () => {};
}

const InstructorCard = React.memo((props: InstructorCardProps) => {
    const classes = useStyles({ isSelected: props.isSelected });

    return (
        <Card 
        className={classes.cardRoot} 
        variant="elevation"
        onClick={props.onSelected}>
            <div className={classes.instDetails}>
                <h4 className="inst-name">
                    {props.inst.name}
                </h4>
                <p className="inst-role">{parseRole(props.inst.role)}</p>
                <p className="inst-langs">
                    Speaks: {props.inst.languages.join(', ')}
                </p>
            </div>
            <img 
            src={props.inst.photo} 
            alt={props.inst.name}
            className={classes.instPhoto}/>
        </Card>
    );
}, (prevProps, nextProps) => (
    prevProps.inst._id === nextProps.inst._id && 
    prevProps.isSelected === nextProps.isSelected
));

export default InstructorCard;