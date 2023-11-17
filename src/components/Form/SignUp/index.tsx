import styles from './style.module.css';
import Checker from '../../Input/Checker';

function SignInForm() {
    return (
        <form className={styles.form}>
            <div className={styles.topSection}>
                <input
                    className={styles.field}
                    placeholder="First Name"
                ></input>
                <input className={styles.field} placeholder="Last Name"></input>
            </div>
            <div className={styles.middleSection}>
                <input
                    className={styles.field}
                    placeholder="Creator Name"
                ></input>
                <input className={styles.field} placeholder="Email"></input>
                <input
                    className={styles.field}
                    placeholder="Phone Number"
                ></input>
                <input className={styles.field} placeholder="Password"></input>
                <input
                    className={styles.field}
                    placeholder="Confirm Password"
                ></input>
            </div>
            <div className={styles.bottomSection}>
                <Checker />
                <p className={styles.checkerContent}>I Accept the Terms</p>
            </div>
        </form>
    );
}
export default SignInForm;
