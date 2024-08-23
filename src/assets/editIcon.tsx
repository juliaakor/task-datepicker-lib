import React from 'react';

import { IconProps } from './types';

export const EditIcon = ({ color = '#AAAAAA', size = 16 }: IconProps) => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 32.000000 32.000000"
      preserveAspectRatio="xMidYMid meet"
      aria-labelledby="Edit Icon"
    >
      <g transform="translate(0.000000,32.000000) scale(0.100000,-0.100000)" fill={color} stroke="none">
        <path
          d="M42 310 c-34 -14 -44 -55 -40 -167 4 -133 8 -137 127 -141 102 -4
140 9 171 61 21 34 28 127 10 127 -5 0 -10 -18 -10 -40 0 -39 -1 -40 -33 -40
-42 0 -57 -15 -57 -57 l0 -33 -79 0 c-109 0 -111 3 -111 140 0 135 4 140 101
140 39 0 69 4 69 10 0 12 -117 12 -148 0z m258 -223 c0 -2 -16 -18 -35 -37
l-35 -34 0 37 c0 36 1 37 35 37 19 0 35 -1 35 -3z"
        />
        <path
          d="M165 229 c-53 -52 -95 -101 -98 -115 -6 -32 15 -53 47 -47 25 5 206
181 206 202 0 6 -9 20 -20 31 -11 11 -25 20 -31 20 -7 0 -53 -41 -104 -91z
m133 44 c4 -27 -5 -29 -30 -6 -24 22 -23 35 5 31 14 -2 23 -11 25 -25z m-96
-115 c-49 -48 -88 -78 -101 -78 -42 0 -23 40 56 121 l77 79 23 -22 24 -23 -79
-77z"
        />
      </g>
    </svg>
  );
};
