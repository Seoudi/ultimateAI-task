import React, { useState } from 'react';
import InfoImage from '../../assets/images/InfoImage';
import HelpInfo from '../../components/HelpInfo/HelpInfo';

export default function Intent(props) {
  const [showInfo, setShowInfo] = useState(false);
  const handleInfoClick = (event) => {
    event.stopPropagation();
    setShowInfo(!showInfo);
  };
  return (
    <div
      data-testid="intent-container"
      className={`intent-container ${props.selected && 'active'}`}
      onClick={() => props.onClick(props.intent.id)}
    >
      {showInfo && (
        <HelpInfo
          title="Expressions"
          description={`Expression are samples of requests that the AI bot may recieve from the customers and will relate these requests to the specified intent. 
        The total number of training expressions for this intent is ${props.intent.trainingData.expressionCount}`}
          onClick={handleInfoClick}
        />
      )}
      <div className="intent-header">
        <h3 className="intent-title">{props.intent.name}</h3>
        <p className="intent-description">{`(${props.intent.description})`}</p>
      </div>
      <div className="intent-expressions-header">
        <p className="intent-expressions-title">Expression Samples</p>
        <InfoImage onClick={handleInfoClick} />
      </div>
      <ul className="intent-expressions">
        {props.intent.trainingData.expressions.map((e) => (
          <li key={e.id}>{e.text}</li>
        ))}
      </ul>
      <p className="intent-reply-title">Reply</p>
      <p className="intent-reply-text">{props.intent.reply.text}</p>
    </div>
  );
}
