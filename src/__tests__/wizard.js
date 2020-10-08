import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Wizard from '../components/Wizard/Wizard';

let steps = [
  {
    title: 'Step One',
    render: () => <div data-testid="wizard-body-container">foo</div>,
    active: false,
  },
  {
    title: 'Select Two',
    render: () => <div data-testid="wizard-body-container">bar</div>,
    active: true,
  },
];

test('should render the active step', async () => {
  const { getByTestId } = render(<Wizard steps={steps} />);

  expect(getByTestId('wizard-body-container').textContent).toBe('bar');
});

test('should set active step as active in header', async () => {
  const { getByTestId } = render(<Wizard steps={steps} />);

  expect(getByTestId(steps[1].title)).toHaveClass('active');
});

test('should set the step as active on click', async () => {
  const { getByTestId } = render(<Wizard steps={steps} />);

  fireEvent.click(getByTestId(steps[0].title));

  expect(getByTestId(steps[0].title)).toHaveClass('active');
});

test('should render the step on header click', async () => {
  const { getByTestId } = render(<Wizard steps={steps} />);

  fireEvent.click(getByTestId(steps[0].title));

  expect(getByTestId('wizard-body-container').textContent).toBe('foo');
});
