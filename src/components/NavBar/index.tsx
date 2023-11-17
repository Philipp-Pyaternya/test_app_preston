import styles from './style.module.css';
import SVG from 'react-inlinesvg';

function NavBar() {
    return (
        <div className={styles.navBar}>
            <div>
                <SVG
                    className={styles.navIcon}
                    src={`${process.env.PUBLIC_URL}/logo_nav.svg`}
                />
            </div>
            <div>
                <SVG
                    className={styles.navIcon}
                    src={`${process.env.PUBLIC_URL}/ring.svg`}
                />
                <SVG
                    className={styles.navIcon}
                    src={`${process.env.PUBLIC_URL}/find.svg`}
                />
            </div>
        </div>
    );
}
export default NavBar;
