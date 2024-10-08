import React from 'react';

import { DEFAULT_ICON } from '@constants/assets';

import { IconProps } from './types';

export const PrevIcon = ({ color = DEFAULT_ICON.iconBlack, size = DEFAULT_ICON.size }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="Previous Icon"
    >
      <path d="M11.7266 12L12.6666 11.06L9.61329 8L12.6666 4.94L11.7266 4L7.72663 8L11.7266 12Z" fill={color} />
      <path d="M7.33332 12L8.27332 11.06L5.21998 8L8.27331 4.94L7.33331 4L3.33332 8L7.33332 12Z" fill={color} />
    </svg>
  );
};
