import React, { useState } from 'react';
import WizardHeaderItem from './WizardHeaderItem';

export default function Wizardheader(props) {
  const [activeStep, setActiveStep] = useState(
    props.steps.findIndex((s) => s.active)
  );
  return (
    <div className="wizard-container">
      {props.steps.map((s, i) => (
        <WizardHeaderItem
          key={i}
          title={s.title}
          active={i === activeStep}
          onClick={() => {
            props.onClick(s);
            setActiveStep(i);
          }}
        />
      ))}
    </div>
  );
}
