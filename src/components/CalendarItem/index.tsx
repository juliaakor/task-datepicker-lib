import React from 'react';

import { CalendarItemWrapper } from './styled';
import { CalendarItemProps } from './types';

export const CalendarItem = ({
  isDisabled = false,
  onClick,
  rangeEnd = false,
  rangeInBetween = false,
  rangeStart = false,
  selected = false,
  value,
}: CalendarItemProps) => {
  const handleItemClick = () => {
    if (onClick) onClick({ isDisabled, rangeEnd, rangeInBetween, rangeStart, selected, value });
  };

  return (
    <CalendarItemWrapper
      $rangeEnd={rangeEnd}
      $rangeInBetween={rangeInBetween}
      $rangeStart={rangeStart}
      $selected={selected}
      $isDisabled={isDisabled}
      onClick={handleItemClick}
    >
      {value}
    </CalendarItemWrapper>
  );
};
