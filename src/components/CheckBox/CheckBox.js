import React from 'react';

export default function Checkbox(props) {
  return (
    <>
      <label htmlFor="select-all-checkbox">Select All</label>
      <input
        id="select-all-checkbox"
        type="checkbox"
        checked={props.checked}
        onChange={props.onClick}
      />
    </>
  );
}
