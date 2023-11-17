import styles from './style.module.css';
import Checker from '../../Input/Checker/index';

function TableItem(props: any) {
    const { id, dataRemoved, link, source, action } = props;

    return (
        <tr className={styles.tableRow}>
            <th className={styles.tableDefines}>
                <Checker />
            </th>
            <td className={styles.tableDefines}>{id}</td>
            <td className={styles.tableDefines}>{dataRemoved}</td>
            <td className={styles.tableDefines}>{link}</td>
            <td className={styles.tableDefines}>{source}</td>
            <td className={styles.tableDefines}>
                <p
                    className={`${styles.tableDefines} ${
                        action === 'Delisted'
                            ? styles.actionDel
                            : styles.actionRem
                    }`}
                >
                    {action}
                </p>
            </td>
        </tr>
    );
}
export default TableItem;
