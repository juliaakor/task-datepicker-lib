import { DateTime } from 'luxon';

import { DEFAULT_ITEM } from '@constants/calendar';

export const generateYearView = (currentYear: number, minDate?: DateTime, maxDate?: DateTime) => {
  const yearsArray = [];
  const startYear = Math.max(currentYear - 5, minDate ? minDate.year : -Infinity);
  const endYear = Math.min(currentYear + 5, maxDate ? maxDate.year : Infinity);

  for (let year = startYear; year <= endYear; year += 1) {
    yearsArray.push({
      ...DEFAULT_ITEM,
      date: DateTime.local(year, 1, 1),
      isDisabled: (minDate && year < minDate.year) || (maxDate && year > maxDate.year),
      key: year.toString(),
      value: year.toString(),
    });
  }

  return yearsArray;
};
