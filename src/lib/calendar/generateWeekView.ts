import { DateTime } from 'luxon';

import { DEFAULT_ITEM } from '@constants/calendar';

export const generateWeekView = (
  startDate: DateTime,
  minDate?: DateTime,
  maxDate?: DateTime,
  startOnMonday: boolean = true,
  showWeekends: boolean = true
) => {
  const daysArray = [];
  let dayOfWeek = startDate.weekday;

  if (startOnMonday) {
    dayOfWeek -= 1;
  } else {
    dayOfWeek %= 7;
  }

  const weekStartDate = startDate.minus({ days: dayOfWeek });

  for (let i = 0; i < 7; i += 1) {
    const day = weekStartDate.plus({ days: i });
    const isBeforeMinDate = minDate ? day < minDate : false;
    const isAfterMaxDate = maxDate ? day > maxDate : false;

    if (showWeekends || (day.weekday !== 6 && day.weekday !== 7)) {
      daysArray.push({
        ...DEFAULT_ITEM,
        date: day,
        isDisabled: isBeforeMinDate || isAfterMaxDate,
        key: day.toISODate(),
        value: day.day,
      });
    }
  }

  return daysArray;
};
