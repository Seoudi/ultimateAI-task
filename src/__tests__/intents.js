import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Intents from '../views/AIBotView/Intents';
import '@testing-library/jest-dom/extend-expect';
import { getIntents } from '../services/IntentsService';
import Intent from '../views/AIBotView/Intent';

test('should create intents array length of intent component', () => {
  const { getByTestId } = render(<Intents />);
  let intents = getIntents();

  expect(getByTestId('intents-container').children.length).toEqual(
    intents.length
  );
});

test('should check the select all checkbox', async () => {
  const { findByLabelText } = render(<Intents />);

  const selectAllCheckBox = await findByLabelText('Select All');

  fireEvent.click(selectAllCheckBox);
  expect(selectAllCheckBox).toBeChecked();
});

test('should add active class to all intent components', async () => {
  const { findByLabelText, findAllByTestId } = render(<Intents />);
  const selectAllCheckBox = await findByLabelText('Select All');
  const intents = await findAllByTestId('intent-container');

  fireEvent.click(selectAllCheckBox);

  intents.forEach((i) => {
    expect(i).toHaveClass('active');
  });
});

test('should add active class to clicked intent component', async () => {
  const { findAllByTestId } = render(<Intents />);
  const intents = await findAllByTestId('intent-container');

  fireEvent.click(intents[0]);

  expect(intents[0]).toHaveClass('active');
});

test('should remove active class from clicked intent component', async () => {
  const { findAllByTestId } = render(<Intents />);
  const intents = await findAllByTestId('intent-container');

  fireEvent.click(intents[0]);
  fireEvent.click(intents[0]);

  expect(intents[0]).not.toHaveClass('active');
});

test('should show help info when click on info image', async () => {
  let intents = getIntents();
  const { findByTestId, getByTestId } = render(<Intent intent={intents[0]} />);
  const infoImage = await findByTestId('info-image');

  fireEvent.click(infoImage);

  expect(getByTestId('help-info-container')).toBeInTheDocument();
});

test('should hide help info when click on it', async () => {
  let intents = getIntents();
  const { findByTestId, queryByTestId, getByTestId } = render(
    <Intent intent={intents[0]} />
  );
  const infoImage = await findByTestId('info-image');

  fireEvent.click(infoImage);
  let helpInfo = getByTestId('help-info-container');
  fireEvent.click(helpInfo);

  helpInfo = queryByTestId('help-info-container');

  expect(helpInfo).toBeNull();
});
