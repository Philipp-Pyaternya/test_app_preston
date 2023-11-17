import SteperItem from './SteperItem/index';
import styles from './style.module.css';

function Steper(props: any) {
    const { steps, currentStep } = props;
    const stepItem = steps?.map((i: any, index: any) => {
        return (
            <SteperItem
                key={i?.step}
                title={i?.title}
                content={i.content}
                step={i.step}
                currentStep={currentStep}
            />
        );
    });
    return <div>{stepItem}</div>;
}
export default Steper;
