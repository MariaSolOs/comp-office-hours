import { createStyles, Theme } from '@material-ui/core/styles';

const styles = (theme: Theme) => createStyles({
    bar: {
        width: '100vw',
        height: '8.5vh',
        maxHeight: 70,
        backgroundColor: 'rgba(143, 181, 153, 0.7)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '5px 20px',
        boxSizing: 'border-box'
    },

    barTitle: {
        margin: 0,
        fontFamily: theme.typography.fontFamily,
        fontWeight: theme.typography.fontWeightBold,
        fontSize: '1.7rem',

        [theme.breakpoints.down('xs')]: { fontSize: '1.1rem' }
    },

    helpMessage: {
        textAlign: 'right',
        color: 'rgb(143, 181, 153)',
        fontSize: '0.85rem',
        fontWeight: theme.typography.fontWeightBold,
        margin: '10px 10px 0 auto'
    },

    emailLink: {
        color: 'rgba(11, 135, 125, 0.8)',
        marginLeft: 4
    }
});

export default styles;