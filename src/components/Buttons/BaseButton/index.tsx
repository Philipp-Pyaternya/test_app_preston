import classes from './style.module.css';

function Button(props: any) {
    const { onClick, content, className = classes.button, style = '' } = props;
    return (
        <button style={style} onClick={onClick} className={className}>
            {content}
        </button>
    );
}
export default Button;
