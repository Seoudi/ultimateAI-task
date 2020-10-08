import React, { useState } from 'react';
import Wizardheader from './WizardHeader';
import './Wizard.css';

export default function Wizard(props) {
  const [selectedStep, setSelectedStep] = useState(
    props.steps.find((s) => s.active)
  );
  return (
    <>
      <Wizardheader
        steps={props.steps}
        onClick={(item) => setSelectedStep(item)}
      />
      {selectedStep.render()}
    </>
  );
}
