import React from 'react';
import { Instructor } from '../../models';

import Card from '@material-ui/core/Card';

import { makeStyles } from '@material-ui/core/styles';
import styles from './InstructorCardStyles';
const useStyles = makeStyles(styles);

type Props = {
    inst: Instructor;
    isSelected: boolean;
    onSelected?: () => void;
}

const InstructorCard = React.memo((props: Props) => {
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