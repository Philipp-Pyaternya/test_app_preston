import classes from './style.module.css';

function Button(props: any) {
    const { onClick } = props;
    return (
        <button onClick={onClick} className={classes.button}>
            Continue
        </button>
    );
}
export default Button;
