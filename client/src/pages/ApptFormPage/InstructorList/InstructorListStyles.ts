import { createStyles, Theme } from '@material-ui/core/styles';

const styles = (theme: Theme) => createStyles({
    list: { 
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },

    switchBox: {
        display: 'flex',
        width: '100%',
        alignItems: 'center',

        '& .MuiSwitch-colorSecondary.Mui-checked': {
            color: 'rgba(11, 135, 125, 1)'
        },

        '& .MuiSwitch-colorSecondary.Mui-checked + .MuiSwitch-track': {
            backgroundColor: 'rgba(11, 135, 125, 0.6)'
        },

        '& .switch-text': {
            margin: 0,
            fontSize: '0.95rem'
        }
    },

    cardWrapper: {
        maxHeight: 170,
        width: '32%',
        margin: '10px 0',
        [theme.breakpoints.down('sm')]: { width: '48%' },
        [theme.breakpoints.down('xs')]: { width: '100%' }
    }
});
export default styles;