const styles = (theme) => ({
    cardRoot: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: 10,
        margin: '10px 0',
        boxSizing: 'border-box',
        width: '32%',
        cursor: 'pointer',
        backgroundColor: props => 
                            props.isSelected? '#ECF2F2' : '#FFF',

        [theme.breakpoints.down('sm')]: { width: '48%' },
        [theme.breakpoints.down('xs')]: { width: '100%' }
    },

    instDetails: {
        display: 'flex',
        flexDirection: 'column',

        '& .inst-name': {
            margin: '8px 0',
            fontWeight: 'bold',
            fontSize: '1rem'
        },
        '& .inst-role': {
            margin: 0,
            color: '#434343',
            fontStyle: 'italic',
            letterSpacing: '-0.05rem'
        },
        '& .inst-langs': {
            fontSize: '0.85rem'
        }
    },

    instPhoto: {
        maxWidth: 100,
        height: 'auto',
        maxHeight: 150
    }
});
export default styles;