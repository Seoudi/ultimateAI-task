import React, { useState } from 'react';
import Checkbox from '../../components/CheckBox/CheckBox';
import Intent from './Intent';
import { getIntents } from '../../services/IntentsService';
import './Intents.css';

export default function Intents() {
  const [checked, setChecked] = useState(false);
  const [selectedIntents, setSelectedIntents] = useState([]);
  const intentsData = getIntents();

  const handleSelectAllClick = () => {
    if (checked) {
      setSelectedIntents([]);
    } else {
      let intents = intentsData.map((i) => i.id);
      setSelectedIntents([...intents]);
    }
    setChecked(!checked);
  };

  const handleIntentClick = (id) => {
    let index = selectedIntents.indexOf(id);
    if (index > -1) {
      let intents = selectedIntents;
      intents.splice(index, 1);
      setSelectedIntents([...intents]);
      setChecked(false);
    } else {
      setSelectedIntents([...selectedIntents, id]);
    }
  };

  return (
    <>
      <div className="intent-step-header">
        <h2 className="intent-step-title">
          Select the Intents that you want to add to your AI Bot
        </h2>
        <div className="select-all-container">
          <Checkbox checked={checked} onClick={handleSelectAllClick} />
        </div>
      </div>
      <p className="intent-step-description">
        Intents are categories of messages that define users' intentions
        according to the message they have sent.
      </p>
      <div data-testid="intents-container" className="intents-container">
        {intentsData.map((intent) => (
          <Intent
            key={intent.id}
            intent={intent}
            selected={selectedIntents.includes(intent.id)}
            onClick={handleIntentClick}
          />
        ))}
      </div>
    </>
  );
}
