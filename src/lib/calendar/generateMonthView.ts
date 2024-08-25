import { DateTime } from 'luxon';

import { DEFAULT_ITEM } from '@constants/calendar';

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

  let startWeekday = startOfMonth.weekday;
  let endWeekday = endOfMonth.weekday;

  if (startOnMonday) {
    startWeekday -= 1;
    endWeekday -= 1;
  } else {
    startWeekday %= 7;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    endWeekday %= 7;
  }

  const daysInMonth = endOfMonth.day;
  const daysArray = [];

  const previousMonthEnd = startOfMonth.minus({ days: startWeekday });
  const nextMonthStart = endOfMonth.plus({ days: 1 });

  const totalDays = showWeekends ? 35 : 25;

  for (let i = 0; i < startWeekday; i += 1) {
    const day = previousMonthEnd.plus({ days: i });
    if (showWeekends || (day.weekday !== 6 && day.weekday !== 7)) {
      daysArray.push({
        ...DEFAULT_ITEM,
        date: day,
        isDisabled: true,
        key: day.toISODate(),
        value: day.day,
      });
    }
  }

  for (let i = 1; i <= daysInMonth; i += 1) {
    const day = startOfMonth.plus({ days: i - 1 });
    const isDisabled = (minDate && day < minDate) || (maxDate && day > maxDate) || false;
    if (showWeekends || (day.weekday !== 6 && day.weekday !== 7)) {
      daysArray.push({
        ...DEFAULT_ITEM,
        date: day,
        isDisabled,
        key: day.toISODate(),
        value: day.day,
      });
    }
  }

  let i = 1;
  while (daysArray.length < totalDays) {
    const day = nextMonthStart.plus({ days: i - 1 });
    if (showWeekends || (day.weekday !== 6 && day.weekday !== 7)) {
      daysArray.push({
        ...DEFAULT_ITEM,
        date: day,
        isDisabled: true,
        key: day.toISODate(),
        value: day.day,
      });
    }
    i += 1;
  }

  return daysArray;
};
