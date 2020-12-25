const styles = (theme) => ({
    list: { 
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
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
    }
});
export default styles;