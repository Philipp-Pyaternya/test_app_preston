import styles from './style.module.css';
import SVG from 'react-inlinesvg';

function SideBarItem(props: any) {
    const { icon, title } = props;
    return (
        <div className={styles.sideBarItem}>
            <SVG
                className={styles.sideBarItemIcon}
                src={`${process.env.PUBLIC_URL}/${icon}.svg`}
            />
            <p>{title}</p>
        </div>
    );
}
export default SideBarItem;
