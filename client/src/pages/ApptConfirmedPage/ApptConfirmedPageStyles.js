const styles = (theme) => ({
    container: {
        width: '60%',
        minWidth: 300,
        margin: '0 auto'
    },

    title: { textAlign: 'center' },

    zoomInfo: {
        display: 'flex',
        fontStyle: 'italic',
        justifyContent: 'center',

        '& img': {
            width: 50,
            height: 50,
            marginRight: 15
        }
    },

    summary: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '20px 0',

        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column'
        }
    },

    card: {
        width: '40%',
        maxWidth: 430
    },

    details: {
        fontSize: '1rem',
        fontWeight: 'bold',
        marginLeft: 15
    }
});
export default styles;