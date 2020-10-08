import React from 'react';

export default function InfoImage(props) {
  return (
    <svg
      width="16"
      height="16"
      xmlns="http://www.w3.org/2000/svg"
      onClick={props.onClick}
      data-testid="info-image"
    >
      <path
        d="M8 15.5a7.5 7.5 0 100-15 7.5 7.5 0 000 15zm0-11a.5.5 0 100-1 .5.5 0 000 1zm0 7v-4"
        stroke="#BFBFBF"
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
