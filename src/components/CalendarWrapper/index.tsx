import React from 'react';

import { Calendar } from '@components/Calendar';
import {
  withCustomTheme,
  withCalendarHolidays,
  withCalendarView,
  withTaskManager,
  withWeekendManager,
} from '@decorators/index';

import { CalendarWrapperProps } from './types';

export const CalendarWrapper = ({ config, ...props }: CalendarWrapperProps) => {
  let EnhancedCalendar = Calendar;

  if (config.enableViewToggle) {
    EnhancedCalendar = withCalendarView(EnhancedCalendar);
  }

  if (config.enableHolidays) {
    EnhancedCalendar = withCalendarHolidays(EnhancedCalendar);
  }

  if (config.enableTasks) {
    EnhancedCalendar = withTaskManager(EnhancedCalendar);
  }

  if (config.enableWeekends) {
    EnhancedCalendar = withWeekendManager(EnhancedCalendar);
  }

  EnhancedCalendar = withCustomTheme(EnhancedCalendar);

  return <EnhancedCalendar {...props} />;
};
