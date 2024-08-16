import React, { useState, useMemo, useEffect } from 'react';

import { CalendarHolidaysService } from '@services/CalendarHolidaysService';
import { Holiday } from '@type/index';

import { WithCalendarHolidaysProps, WithCalendarHolidaysServiceProps } from './types';

export const withCalendarHolidays = <P extends object>(
  WrappedComponent: React.ComponentType<P & WithCalendarHolidaysProps>
) => {
  const WithCalendarHolidays = (props: Omit<P, keyof WithCalendarHolidaysProps> & WithCalendarHolidaysServiceProps) => {
    const { customHolidays, includeDefaultHolidays, ...restProps } = props;

    const calendarHolidayService = useMemo(
      () => new CalendarHolidaysService(includeDefaultHolidays, customHolidays),
      [customHolidays, includeDefaultHolidays]
    );

    const [holidays, setHolidays] = useState<Holiday[]>([]);

    useEffect(() => {
      const fetchHolidays = async () => {
        const holidays = await calendarHolidayService.getAllHolidays();
        setHolidays(holidays);
      };

      fetchHolidays();
    }, [calendarHolidayService]);

    const handleUpdateRange = async (startDate: string, endDate: string) => {
      await calendarHolidayService.updateDateRange(startDate, endDate);
      const holidays = await calendarHolidayService.getAllHolidays();
      setHolidays(holidays);
    };

    return <WrappedComponent {...(restProps as P)} handleRangeChange={handleUpdateRange} holidays={holidays} />;
  };

  WithCalendarHolidays.displayName = `WithCalendarHolidays(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return WithCalendarHolidays;
};
