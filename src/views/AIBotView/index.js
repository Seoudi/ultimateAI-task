import React from 'react';
import Wizard from '../../components/Wizard/Wizard';
import Intents from './Intents';

export default function Index() {
  return (
    <Wizard
      steps={[
        { title: 'Step One', render: () => <></>, active: false },
        { title: 'Select Intents', render: () => <Intents />, active: true },
        { title: 'Step Three', render: () => <></>, active: false },
      ]}
    />
  );
}
