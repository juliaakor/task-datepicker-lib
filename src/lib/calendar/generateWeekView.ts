import { DateTime } from 'luxon';

import { DAYS_IN_WEEK, WEEKEND_DAYS } from '@constants/calendar';

import { generateDayObject } from './helpers/generateDayObject';

export const generateWeekView = (
  startDate: DateTime,
  minDate?: DateTime,
  maxDate?: DateTime,
  startOnMonday: boolean = true,
  showWeekends: boolean = true
) => {
  const daysArray = [];

  const dayOfWeek = startOnMonday ? (startDate.weekday % DAYS_IN_WEEK) - 1 : startDate.weekday % DAYS_IN_WEEK;
  const weekStartDate = startDate.minus({ days: dayOfWeek });

  for (let i = 0; i < DAYS_IN_WEEK; i += 1) {
    const day = weekStartDate.plus({ days: i });

    const isBeforeMinDate = minDate ? day < minDate : false;
    const isAfterMaxDate = maxDate ? day > maxDate : false;
    const isDisabled = isBeforeMinDate || isAfterMaxDate;

    if (showWeekends || !WEEKEND_DAYS.includes(day.weekday)) {
      daysArray.push(generateDayObject(day, isDisabled));
    }
  }

  return daysArray;
};
