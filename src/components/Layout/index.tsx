import Nav from '../../components/NavBar/index';
import SideBar from '../../components/SideBar';
import { sideBar } from '../../fakeData';
import styles from './style.module.css';

function Layout(props) {
    const { children } = props;
    return (
        <div className={styles.layout}>
            <Nav />
            <SideBar items={sideBar} />
            <div className={styles.content}> {children}</div>
        </div>
    );
}
export default Layout;
