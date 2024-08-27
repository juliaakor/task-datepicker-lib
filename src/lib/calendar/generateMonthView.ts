import { DateTime } from 'luxon';

import { DAYS_IN_WEEK, MAX_CALENDAR_DAYS, MAX_CALENDAR_DAYS_WITHOUT_WEEKENDS } from '@constants/calendar';

import { generateDayObject } from './helpers/generateDayObject';

export const generateMonthView = (
  year: number,
  month: number,
  minDate?: DateTime | null,
  maxDate?: DateTime | null,
  startOnMonday: boolean = true,
  showWeekends: boolean = true
) => {
  const startOfMonth = DateTime.local(year, month, 1);
  const endOfMonth = startOfMonth.endOf('month');

  const startWeekday = (startOfMonth.weekday % DAYS_IN_WEEK) - (startOnMonday ? 1 : 0);
  const daysInMonth = endOfMonth.day;
  const daysArray = [];

  const totalDays = showWeekends ? MAX_CALENDAR_DAYS : MAX_CALENDAR_DAYS_WITHOUT_WEEKENDS;

  for (let i = startWeekday; i > 0; i -= 1) {
    const day = startOfMonth.minus({ days: i });
    if (showWeekends || (day.weekday !== 6 && day.weekday !== 7)) {
      daysArray.push(generateDayObject(day, true));
    }
  }

  for (let i = 1; i <= daysInMonth; i += 1) {
    const day = startOfMonth.plus({ days: i - 1 });
    const isDisabled = (minDate && day < minDate) || (maxDate && day > maxDate);
    if (showWeekends || (day.weekday !== 6 && day.weekday !== 7)) {
      daysArray.push(generateDayObject(day, isDisabled || false));
    }
  }

  for (let i = 1; daysArray.length < totalDays; i += 1) {
    const day = endOfMonth.plus({ days: i });
    if (showWeekends || (day.weekday !== 6 && day.weekday !== 7)) {
      daysArray.push(generateDayObject(day, true));
    }
  }

  return daysArray;
};
