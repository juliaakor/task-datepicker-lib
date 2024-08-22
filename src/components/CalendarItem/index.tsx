import React, { useState } from 'react';

import { CalendarItemWrapper, Tooltip } from './styled';
import { CalendarItemProps } from './types';

export const CalendarItem = ({
  date,
  hasTasks = false,
  holidays = [],
  isDisabled = false,
  isHeaderItem = false,
  onClick,
  onDoubleClick,
  rangeEnd = false,
  rangeInBetween = false,
  rangeStart = false,
  selected = false,
  value,
}: CalendarItemProps) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleItemClick = () => {
    if (onClick) onClick({ date, isDisabled, rangeEnd, rangeInBetween, rangeStart, selected, value });
  };

  const handleDoubleClick = () => {
    if (onDoubleClick) onDoubleClick({ date, isDisabled, rangeEnd, rangeInBetween, rangeStart, selected, value });
  };

  const handleMouseEnter = () => {
    if (holidays.length > 0) {
      setShowTooltip(true);
    }
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <CalendarItemWrapper
      $rangeEnd={rangeEnd}
      $rangeInBetween={rangeInBetween}
      $rangeStart={rangeStart}
      $selected={selected}
      $isDisabled={isDisabled}
      $isHeaderItem={isHeaderItem}
      $hasTasks={hasTasks}
      $hasHolidays={holidays?.length > 0}
      onClick={handleItemClick}
      onDoubleClick={handleDoubleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {value}
      <Tooltip $visible={showTooltip}>
        {holidays.map((holiday) => (
          <div key={holiday.id}>{holiday.name}</div>
        ))}
      </Tooltip>
    </CalendarItemWrapper>
  );
};
