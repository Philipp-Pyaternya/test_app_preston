import styles from './style.module.css';
import SVG from 'react-inlinesvg';

function Card(props: any) {
    const { count, content, icon, color } = props;
    return (
        <div
            style={{ borderBottom: `solid 4px ${color}` }}
            className={styles.card}
        >
            <div className={styles.cardUp}>
                <p>{count}</p>
                <SVG
                    className={styles.cardIcon}
                    src={`${process.env.PUBLIC_URL}/${icon}.svg`}
                />
            </div>
            <div className={styles.cardDown}>
                <p>{content}</p>
            </div>
        </div>
    );
}
export default Card;
