import { createStyles } from '@material-ui/core/styles';
import type { Theme } from '@material-ui/core/styles';

const styles = (theme: Theme) => createStyles({
    noSlotsMsg: {
        marginLeft: 20,
        fontWeight: theme.typography.fontWeightBold,
        color: '#434343'
    },

    timeslots: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        height: 'fit-content'
    },

    timeslot: {
        width: '45%',
        minWidth: 50,
        margin: '0 0 15px 15px',
        padding: '10px 20px',
        height: 50,
        backgroundColor: 'rgba(160, 215, 226, 0.5)',
        border: 'none',
        boxShadow: '0px 3px 1px -2px rgba(0,0,0,0.2), ' +
                   '0px 2px 2px 0px rgba(0,0,0,0.14), ' + 
                   '0px 1px 5px 0px rgba(0,0,0,0.12)',
        fontWeight: theme.typography.fontWeightBold,
        fontFamily: theme.typography.fontFamily,
        cursor: 'pointer',
        transition: '300ms',

        '&&.booked': {
            backgroundColor: '#D8D9D7',
            cursor: 'not-allowed'
        },

        '&:hover, &.selected': { backgroundColor: 'rgba(160, 215, 226, 1)' },
        '&:focus': { outline: 'none' }
    },

    tooltip: {
        fontWeight: theme.typography.fontWeightBold,
        fontFamily: theme.typography.fontFamily
    }
});
export default styles;