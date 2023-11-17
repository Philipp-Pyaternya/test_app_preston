import styles from './style.module.css';
import SideBarItem from './SideBarItem/index';
import { ISideBar } from '../../constants';

interface ISideBarProps {
    items: ISideBar[];
}

function SideBar(props: ISideBarProps) {
    const { items } = props;

    const sideBarItems = items.map((item) => {
        return (
            <SideBarItem key={item.title} title={item.title} icon={item.icon} />
        );
    });

    return <div className={styles.sideBar}>{sideBarItems}</div>;
}
export default SideBar;
