import React, { useState } from 'react';
import SideStepBlock from '../../components/SideStepBlock/index';
import { steper } from '../../fakeData';
import { IStep } from '../../constants';
import Title from '../../components/Title/title';
import Card from '../../components/Buttons/IconButton';
import Button from '../../components/Buttons/BaseButton/index';
import SVG from 'react-inlinesvg';
import { Link } from 'react-router-dom';
import styles from './style.module.css';
import Form from '../../components/Form/SignUp/index';
import { useNavigate } from 'react-router-dom';

function SignUp() {
    const navigate = useNavigate();

    const [currentStep, setCurrentStep] = useState(1);
    const [cardCheck, setCardCheck] = useState(null);

    const stepHandler = () => {
        if (currentStep < 2) {
            setCurrentStep(currentStep + 1);
        } else {
            if (currentStep === 2) {
                navigate('/');
            }
        }
    };

    const clickHandler = (e) => setCardCheck(e.target.innerText);

    return (
        <div className={styles.signUpPage}>
            <div className={styles.signUpPageRight}>
                <SVG
                    className={styles.logo}
                    src={`${process.env.PUBLIC_URL}/logo.svg`}
                />
                <div style={{ marginBottom: '10rem' }}>
                    <SideStepBlock steps={steper} currentStep={currentStep} />
                </div>
                <div className={styles.links}>
                    <Link className={styles.link} to="/sign-up#">
                        Terms
                    </Link>
                    <Link className={styles.link} to="/sign-up#">
                        Plans
                    </Link>
                    <Link className={styles.link} to="/sign-up#">
                        Contact Us
                    </Link>
                </div>
            </div>
            <div className={styles.signUpPageLeft}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ marginLeft: '2rem' }}>
                        <Title
                            title={
                                currentStep === 1
                                    ? 'Choose an account type'
                                    : 'Account Details'
                            }
                            content={
                                currentStep === 1
                                    ? 'If you need more info, please visit our help page.'
                                    : 'Add your personal info'
                            }
                        />
                    </div>
                    {currentStep === 1 && (
                        <div style={{ display: 'flex' }}>
                            <Card
                                title="Creator"
                                content="Sign-up as a creator"
                                icon="users"
                                clickHandler={clickHandler}
                            />
                            <Card
                                title="Agency"
                                content="Sign-up as an agency"
                                icon="education"
                                clickHandler={clickHandler}
                            />
                        </div>
                    )}
                    {currentStep === 2 && <Form />}
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'end',
                            marginTop: '2rem',
                        }}
                    >
                        <Button
                            style={{
                                width: currentStep === 1 ? '15rem' : '100%',
                            }}
                            content="Continue"
                            onClick={stepHandler}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SignUp;
