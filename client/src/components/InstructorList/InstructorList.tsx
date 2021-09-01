import type { InstructorListProps } from './index';

import Switch from '@material-ui/core/Switch';
import InstructorCard from 'components/InstructorCard/InstructorCard';

import { makeStyles } from '@material-ui/core/styles';
import styles from './InstructorListStyles';
const useStyles = makeStyles(styles);

const InstructorList = (props: InstructorListProps) => {
    const classes = useStyles();

    return (
        <div className={classes.list}>
            <div className={classes.switchBox}>
                <Switch 
                checked={props.useAnyInstructor} 
                onChange={props.onToggleAnyInstructor} />
                <p className="switch-text">Anyone is fine.</p>
            </div>
            {props.instructors.map(inst => (
                <div key={inst._id} className={classes.cardWrapper}>
                    <InstructorCard 
                    inst={inst}
                    isSelected={inst._id === props.selectedInstructor?._id}
                    onSelected={() => props.onInstructorChange(inst)} />
                </div>
            ))}
        </div>
    );
}

export default InstructorList;