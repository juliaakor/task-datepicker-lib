import React from 'react';

import { IconProps } from './types';

export const ClearIcon = ({ color = '#AAAAAA', size = 16 }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="Clear Icon"
    >
      <path
        d="M12.9872 3.04239C10.2573 0.319202 5.77739 0.319202 3.04745 3.04239C0.317516 5.76559 0.317516 10.2344 3.04745 12.9576C5.77739 15.6808 10.1873 15.6808 12.9172 12.9576C15.6471 10.2344 15.7171 5.76559 12.9872 3.04239ZM9.97728 10.9327L8.01733 8.97756L6.05738 10.9327L5.0774 9.95511L7.03735 8L5.0774 6.04489L6.05738 5.06733L8.01733 7.02244L9.97728 5.06733L10.9573 6.04489L8.99731 8L10.9573 9.95511L9.97728 10.9327Z"
        fill={color}
      />
    </svg>
  );
};
