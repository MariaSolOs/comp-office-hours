import { makeStyles } from '@material-ui/core/styles';
import styles from './NavbarStyles';
const useStyles = makeStyles(styles);

const Navbar = () => {
    const classes = useStyles();

    return (
        <div className={classes.bar}>
            <h2 className={classes.barTitle}>
                COMP206: Introduction to Software Systems
            </h2>
        </div>
    );
}

export default Navbar;