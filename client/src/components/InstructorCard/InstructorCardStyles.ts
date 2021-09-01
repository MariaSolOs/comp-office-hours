import { createStyles } from '@material-ui/core/styles';
import type { Theme } from '@material-ui/core/styles';

import type { InstructorCardStyleProps } from './index';

const styles = (theme: Theme) => createStyles({
    cardRoot: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: 10,
        boxSizing: 'border-box',
        width: '100%',
        minWidth: 260,
        height: '100%',
        cursor: 'pointer',
        backgroundColor: (props: InstructorCardStyleProps) => 
            props.isSelected? '#ECF2F2' : '#FFF'
    },

    instructorDetails: {
        display: 'flex',
        flexDirection: 'column'
    },

    instructorName: {
        margin: '8px 0',
        fontWeight: theme.typography.fontWeightBold,
        fontSize: '1rem'
    },

    instPhoto: {
        maxWidth: 100,
        height: 'auto',
        maxHeight: 150
    }
});
export default styles;