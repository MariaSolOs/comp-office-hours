const styles = (theme) => ({
    list: { 
        display: 'flex',
        flexWrap: 'wrap'
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

    cardRoot: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: 10,
        margin: 10,
        width: '28%',
        cursor: 'pointer',
        backgroundColor: props => 
                            props.isSelected? '#ECF2F2' : '#FFF',

        [theme.breakpoints.down('sm')]: { width: '40%' },
        [theme.breakpoints.down('xs')]: { width: '90%' }
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