import { createStyles } from '@material-ui/core/styles';

type StyleProps = {
    isSelected: boolean;
}

const styles = () => createStyles({
    cardRoot: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: 10,
        boxSizing: 'border-box',
        width: '100%',
        minWidth: 260,
        height: '100%',
        cursor: 'pointer',
        backgroundColor: (props: StyleProps) => 
                            props.isSelected? '#ECF2F2' : '#FFF'
    },

    instDetails: {
        display: 'flex',
        flexDirection: 'column',

        '& .inst-name': {
            margin: '8px 0',
            fontWeight: 'bold',
            fontSize: '1rem'
        }
    },

    instPhoto: {
        maxWidth: 100,
        height: 'auto',
        maxHeight: 150
    }
});
export default styles;