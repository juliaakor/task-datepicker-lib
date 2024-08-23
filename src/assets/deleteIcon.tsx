import React from 'react';

import { IconProps } from './types';

export const DeleteIcon = ({ color = '#AAAAAA', size = 16 }: IconProps) => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 32.000000 32.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g transform="translate(0.000000,32.000000) scale(0.100000,-0.100000)" fill={color} stroke="none">
        <path
          d="M35 285 c-23 -22 -25 -31 -25 -125 0 -94 2 -103 25 -125 22 -23 31
-25 125 -25 94 0 103 2 125 25 23 22 25 31 25 125 0 94 -2 103 -25 125 -22 23
-31 25 -125 25 -94 0 -103 -2 -125 -25z m235 -15 c17 -17 20 -33 20 -110 0
-77 -3 -93 -20 -110 -17 -17 -33 -20 -110 -20 -77 0 -93 3 -110 20 -17 17 -20
33 -20 110 0 77 3 93 20 110 17 17 33 20 110 20 77 0 93 -3 110 -20z"
        />
        <path
          d="M110 203 c0 -3 7 -15 17 -25 15 -17 15 -19 -2 -38 -24 -26 -11 -39
15 -15 19 17 21 17 40 0 26 -24 39 -11 15 15 -17 19 -17 21 0 40 24 26 11 39
-15 15 -19 -17 -21 -17 -38 -2 -19 18 -32 22 -32 10z"
        />
      </g>
    </svg>
  );
};
