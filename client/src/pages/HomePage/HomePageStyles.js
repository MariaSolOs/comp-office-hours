export const mainStyles = (theme) => ({
    menu: {
        margin: '15vh auto 0',
        width: '85%',
        minWidth: 300,
        border: '1px solid black'
    }
});

export const instructorsStyles = (theme) => ({
    instSection: {  
        width: '100%'
    },

    instList: { 
        display: 'flex'
    },

    cardRoot: {
        display: 'flex',
        justifyContent: 'space-around',
        padding: 10,
        margin: 10,
        width: '40%',
    },

    instDetails: {
        display: 'flex',

        '& .inst-name': {

        }
    },

    instPhoto: {
        maxWidth: 100,
        height: 'auto',
    }
});