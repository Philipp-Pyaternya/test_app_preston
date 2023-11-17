import React from 'react';
import styles from './style.module.css';

function steperItem(props: any) {
    const { title, content, step, currentStep } = props;
    return (
        <div className={styles.steperItem}>
            <div
                className={`${styles.steperItemNum} ${
                    step === currentStep
                        ? styles.steperItemActive
                        : styles.steperItemInactive
                }`}
            >
                {step}
            </div>
            <div>
                <p className={styles.steperTitle}>{title}</p>
                <p className={styles.steperContent}>{content}</p>
            </div>
        </div>
    );
}
export default steperItem;
