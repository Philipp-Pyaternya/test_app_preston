import styles from './style.module.css';
import TableItem from './TableItem';
import Checker from '../Input/Checker/index';
import { ITableList } from '../../constants';

interface ITableProps {
    tableList: ITableList[];
}

function Table(props: ITableProps) {
    const { tableList } = props;

    const tableItem = tableList.map((data) => {
        return (
            <TableItem
                key={data.id}
                id={data.id}
                dataRemoved={data.dateRemoved}
                link={data.link}
                source={data.source}
                action={data.action}
            />
        );
    });

    return (
        <table className={styles.table}>
            <tr className={styles.tableHead}>
                <th>
                    <Checker />
                </th>
                <th>ID</th>
                <th>DATE REMOVED</th>
                <th>LINK</th>
                <th>SOURCE</th>
                <th>Action</th>
            </tr>
            {tableItem}
        </table>
    );
}
export default Table;
