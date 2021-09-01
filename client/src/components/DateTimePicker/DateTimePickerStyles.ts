import { createStyles, Theme } from '@material-ui/core/styles';

const styles = (theme: Theme) => createStyles({
    container: {
        display: 'flex',

        [theme.breakpoints.down('xs')]: { 
            flexDirection: 'column',
            alignItems: 'center' 
        }
    },

    calendar: {
        fontFamily: theme.typography.fontFamily,
        border: 'none',
        '& .react-datepicker__month-container': {
            boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), ' +
                       '0px 1px 1px 0px rgba(0,0,0,0.14), ' +
                       '0px 1px 3px 0px rgba(0,0,0,0.12)',
            borderRadius: '0.5rem'
        },
        '& .react-datepicker__header': {
            backgroundColor: '#ECF2F2'
        },
        '& .react-datepicker__day--selected, & .react-datepicker__day--keyboard-selected': {
            backgroundColor: 'rgba(11, 135, 125, 0.8)',
            color: '#FFF',
            fontWeight: theme.typography.fontWeightBold
        },
        '& .react-datepicker__day, & .react-datepicker__day--keyboard-selected, & .react-datepicker__navigation': {
            '&:focus': { outline: 'none' }
        },

        [theme.breakpoints.down('xs')]: { margin: '20px auto' }
    }
});
export default styles;