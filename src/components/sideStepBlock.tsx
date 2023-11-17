import React from 'react';
import Steper from './Steper/index';
import { IStep } from '../constants';

function sideStepBlock(props: any) {
    const { steps, currentStep } = props;
    return (
        <div className="sideStepper">
            <Steper steps={steps} currentStep={currentStep} />
        </div>
    );
}
export default sideStepBlock;
