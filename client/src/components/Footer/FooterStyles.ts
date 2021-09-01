import { createStyles } from '@material-ui/core/styles';
import type { Theme } from '@material-ui/core/styles';

const styles = (theme: Theme) => createStyles({
    footer: {
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        marginRight: 10
    },

    message: {
        textAlign: 'right',
        color: 'rgba(143, 181, 153, 1)',
        fontSize: '0.85rem',
        fontWeight: theme.typography.fontWeightBold
    },

    emailLink: {
        color: 'rgba(11, 135, 125, 0.8)',
        marginLeft: 4
    }
});
export default styles;