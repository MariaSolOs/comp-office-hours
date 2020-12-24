const styles = (theme) => ({
    menu: {
        margin: '5vh auto',
        width: '85%',
        minWidth: 300
    },

    section: { width: '100%' },
    
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
    }
});
export default styles;