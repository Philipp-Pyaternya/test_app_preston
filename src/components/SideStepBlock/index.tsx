import Steper from '../Steper/index';
import styles from './style.module.css';
import { IStep } from '../../constants';

function sideStepBlock(props: any) {
    const { steps, currentStep } = props;
    return (
        <div className={styles.sideStepper}>
            <Steper steps={steps} currentStep={currentStep} />
        </div>
    );
}
export default sideStepBlock;
