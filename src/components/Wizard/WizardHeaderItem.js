import React from 'react';

export default function WizardHeaderItem(props) {
  return (
    <div
      data-testid={`${props.title}`}
      className={`wizard-item ${props.active && 'active'}`}
      onClick={props.onClick}
    >
      <p>{props.title}</p>
    </div>
  );
}
