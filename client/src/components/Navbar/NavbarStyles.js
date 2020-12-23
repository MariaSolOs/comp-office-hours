const styles = (theme) => ({
    bar: {
        width: '100vw',
        height: '8vh',
        backgroundColor: 'rgba(143, 181, 153, 0.7)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 20px',
        boxSizing: 'border-box'
    },

    barTitle: {
        margin: 0,
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: 'bold',
        fontSize: '1.7rem',

        [theme.breakpoints.down('sm')]: {
            fontSize: '1.2rem'
        }
    }
});

export default styles;