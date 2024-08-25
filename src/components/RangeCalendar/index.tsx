import React from 'react';

import { CalendarWrapper } from '@components/CalendarWrapper';
import { useRangeCalendar } from '@hooks/useRangeCalendar';

import { RangeCalendarProps } from './types';

const config = {
  enableHolidays: false,
  enableTasks: false,
  enableViewToggle: true,
  enableWeekends: true,
};

export const RangeCalendar = ({
  className,
  holidays,
  isOpen,
  isWeekStartOnMonday = false,
  maxDate,
  minDate,
  showWeekends = true,
  taskManager,
  tasks,
  view,
}: RangeCalendarProps) => {
  const { fromDate, handleFromDateChange, handleToDateChange, inputFromDate, inputToDate, toDate } = useRangeCalendar();

  return (
    <div className={className}>
      <CalendarWrapper
        config={config}
        label="From"
        enableRange
        holidays={holidays}
        isOpen={isOpen}
        isWeekStartOnMonday={isWeekStartOnMonday}
        maxDate={maxDate}
        minDate={minDate}
        showWeekends={showWeekends}
        taskManager={taskManager}
        tasks={tasks}
        view={view}
        startRange={fromDate}
        endRange={toDate}
        onDateSelect={handleFromDateChange}
        inputValue={inputFromDate}
      />
      <CalendarWrapper
        config={config}
        label="To"
        enableRange
        holidays={holidays}
        isOpen={isOpen}
        isWeekStartOnMonday={isWeekStartOnMonday}
        maxDate={maxDate}
        minDate={minDate}
        showWeekends={showWeekends}
        taskManager={taskManager}
        tasks={tasks}
        view={view}
        startRange={fromDate}
        endRange={toDate}
        onDateSelect={handleToDateChange}
        inputValue={inputToDate}
      />
    </div>
  );
};
