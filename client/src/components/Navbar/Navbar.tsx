import { makeStyles } from '@material-ui/core/styles';
import styles from './NavbarStyles';
const useStyles = makeStyles(styles);

const Navbar = () => {
    const classes = useStyles();

    return (
        <>
            <nav className={classes.bar}>
                <h2 className={classes.barTitle}>
                    COMP206: Introduction to Software Systems
                </h2>
            </nav>
            <div className={classes.helpMessage}>
                Encountered technical issues? Please 
                <a 
                href="mailto:maria.solano@mail.mcgill.ca" 
                className={classes.emailLink}>
                    let us know
                </a>.
            </div>
        </>
    );
}

export default Navbar;