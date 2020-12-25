const styles = (theme) => ({
    container: {
        width: '70%',
        minWidth: 300,
        maxWidth: 670,
        margin: '10vh auto',
    },

    title: { color: '#02734A' },

    paper: {
        padding: 20,
        backgroundColor: '#ECF2F2'
    },

    formLabel: { fontWeight: 'bold' },

    input: {
        border: '1px solid #404040',
        marginTop: 10,
        borderRadius: 10,
        fontFamily: 'Montserrat',
        padding: 6
    },

    errMsg: {
        fontWeight: 'bold',
        color: '#FF2607',
        display: 'inline-block',
        margin: '5px 0 0 3px'
    },

    submitButton: {
        margin: '10px 0 0 auto',
        display: 'block',
        fontFamily: 'Montserrat',
        backgroundColor: '#B1CED1',
        fontWeight: 'bold',
        fontSize: '1rem',
        padding: '10px 15px',
        borderRadius: 10,
        border: 'none',

        '&:focus': { outline: 'none' }
    }
});
export default styles;