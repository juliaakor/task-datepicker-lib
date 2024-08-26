import { DateTime } from 'luxon';
import React, { useEffect, useState } from 'react';

import { CalendarItem } from '@components/CalendarItem';
import { CalendarItem as CalendarItemType } from '@components/CalendarItem/types';
import { generateMonthView, generateWeekView, generateYearView, getRangeState } from '@lib/calendar';
import { View } from '@type/index';

import { CalendarItems } from './styled';
import { CalendarItemsListProps } from './types';

export const CalendarItemsList = ({
  currentDate,
  enableRange,
  endRange,
  handleItemClick,
  handleItemDoubleClick,
  headerDays,
  holidays,
  isWeekStartOnMonday,
  maxDate,
  minDate,
  selectedDate,
  showWeekends,
  startRange,
  tasks,
  view,
}: CalendarItemsListProps) => {
  const [days, setDays] = useState<CalendarItemType[]>([]);

  useEffect(() => {
    if (view === View.Month) {
      setDays(
        generateMonthView(currentDate.year, currentDate.month, minDate, maxDate, isWeekStartOnMonday, showWeekends)
      );
    }

    if (view === View.Week) {
      setDays(generateWeekView(currentDate, minDate, maxDate, isWeekStartOnMonday, showWeekends));
    }

    if (view === View.Year) {
      setDays(generateYearView(currentDate.year, minDate, maxDate));
    }
  }, [currentDate, isWeekStartOnMonday, maxDate, minDate, showWeekends, view]);

  const getCalendarItem = ({
    date = currentDate,
    isDisabled,
    rangeEnd,
    rangeInBetween,
    rangeStart,
    value,
  }: CalendarItemType) => {
    const holidaysForDate = holidays?.filter((holiday) => DateTime.fromISO(holiday.startDate).hasSame(date, 'day'));

    const rangeState = getRangeState(enableRange, date, startRange, endRange);
    const inBetweenRange = enableRange && startRange && endRange && date > startRange && date < endRange;

    const isSelected = selectedDate && date.toFormat('yyyy-MM-dd') === selectedDate.toFormat('yyyy-MM-dd');

    const hasTasks = Boolean(tasks?.[date?.toISODate() || '']?.length);

    return (
      <CalendarItem
        onClick={handleItemClick}
        onDoubleClick={handleItemDoubleClick}
        date={date}
        key={date?.toISODate()}
        value={value}
        isDisabled={isDisabled}
        rangeStart={rangeState.rangeStart || rangeStart}
        rangeEnd={rangeState.rangeEnd || rangeEnd}
        selected={enableRange ? false : isSelected || false}
        rangeInBetween={inBetweenRange || rangeInBetween}
        hasTasks={hasTasks}
        holidays={holidaysForDate}
      />
    );
  };

  return (
    <CalendarItems $showWeekends={showWeekends} $viewType={view || View.Month}>
      {view !== View.Year && headerDays.map((day) => <CalendarItem key={day} value={day} isHeaderItem />)}

      {days.map(getCalendarItem)}
    </CalendarItems>
  );
};
