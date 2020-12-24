const styles = (theme) => ({
    container: {
        display: 'flex'
    },

    calendar: {
        fontFamily: 'Montserrat',
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
        '& .react-datepicker__day--selected': {
            backgroundColor: 'rgba(11, 135, 125, 0.8)',
            color: '#FFF',
            fontWeight: 'bold'
        },
        '& .react-datepicker__day, & .react-datepicker__day--keyboard-selected, & .react-datepicker__navigation': {
            '&:focus': { outline: 'none' }
        }
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
        backgroundColor: '#A0D7E2',
        border: 'none',
        boxShadow: '0px 3px 1px -2px rgba(0,0,0,0.2), ' +
                   '0px 2px 2px 0px rgba(0,0,0,0.14), ' + 
                   '0px 1px 5px 0px rgba(0,0,0,0.12)',
        fontWeight: 'bold',
        fontFamily: 'Montserrat',
        cursor: 'pointer',
        opacity: '0.65',
        transition: '300ms',

        '&:hover, &.selected': { opacity: '1' },
        '&:focus': { outline: 'none' }
    }
});
export default styles;