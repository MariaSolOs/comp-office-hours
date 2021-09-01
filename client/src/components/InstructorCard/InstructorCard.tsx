import React from 'react';

import type { Instructor } from 'models';

import Card from '@material-ui/core/Card';

import { makeStyles } from '@material-ui/core/styles';
import styles from './InstructorCardStyles';
const useStyles = makeStyles(styles);

type Props = {
    inst: Instructor;
    isSelected: boolean;
    onSelected?: () => void;
}

export type StyleProps = {
    isSelected: boolean;
}

const InstructorCard = React.memo((props: Props) => {
    const classes = useStyles({ isSelected: props.isSelected });

    return (
        <Card 
        className={classes.cardRoot} 
        variant="elevation"
        onClick={props.onSelected}>
            <div className={classes.instructorDetails}>
                <h4 className={classes.instructorName}>
                    {props.inst.name}
                </h4>
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