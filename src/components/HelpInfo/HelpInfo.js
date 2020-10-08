import React from 'react';
import HelpInfoImage from '../../assets/images/HelpInfoImage';
import './HelpInfo.css';

export default function HelpInfo(props) {
  return (
    <div
      data-testid="help-info-container"
      className="help-info-container"
      onClick={props.onClick}
    >
      <div className="help-info-header">
        <HelpInfoImage />
        <p className="help-info-title">{props.title}</p>
      </div>
      <p className="help-info-description">{props.description}</p>
    </div>
  );
}
