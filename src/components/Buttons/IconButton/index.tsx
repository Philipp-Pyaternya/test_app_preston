import SVG from 'react-inlinesvg';
import styles from './style.module.css';

function SignCard(props: any) {
    const { title, content, icon, clickHandler } = props;
    return (
        <button onClick={(e) => clickHandler(e)} className={styles.card}>
            <div>
                <SVG src={`${process.env.PUBLIC_URL}/${icon}.svg`} />
            </div>
            <div className={styles.cardContent}>
                <p>{title}</p>
                <p>{content}</p>
            </div>
        </button>
    );
}
export default SignCard;
