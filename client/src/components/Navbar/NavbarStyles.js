const styles = (theme) => ({
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
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: 'bold',
        fontSize: '1.7rem',

        [theme.breakpoints.down('xs')]: {
            fontSize: '1.1rem'
        }
    }
});

export default styles;