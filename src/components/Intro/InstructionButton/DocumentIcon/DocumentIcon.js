import React from 'react';
import './DocumentIcon.scss';

export const DocumentIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="Document-Icon"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
    >
      <path
        stroke-linecap="round" 
        stroke-linejoin="round"
        d="M8 13H14M8 17H16M13 3H5V21H19V9M13 3H14L19 8V9M13 3V7C13 8 14 9 15 9H19"
      />
    </svg>
  );
};
