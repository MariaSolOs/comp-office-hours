const styles = (theme) => ({
    menu: {
        margin: '5vh auto',
        width: '85%',
        minWidth: 300
    },

    section: { 
        width: '100%',
        margin: '20px 0'
    },
    
    calendarHeader: {
        '& .calheader-title': {
            display: 'inline-block',
            margin: '20px 0'
        },
        '& .calheader-msg': {
            fontStyle: 'italic',
            color: '#434343',
            marginLeft: 10,
            fontSize: '0.9rem'
        }
    },

    errorMsg: {
        fontWeight: 'bold',
        color: '#FF2607'
    },

    submitButton: {
        cursor: 'pointer',
        fontFamily: 'Montserrat',
        fontWeight: 'bold',
        height: 50,
        border: 'none',
        fontSize: '1rem',
        padding: '10px 15px',
        backgroundColor: '#15AB89',
        color: '#FFF',
        borderRadius: 15,
        float: 'right',

        '&:focus': { outline: 'none' }
    }
});
export default styles;