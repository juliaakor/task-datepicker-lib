import { DateTime } from 'luxon';

import { DEFAULT_ITEM, YEARS_OFFSET } from '@constants/calendar';

export const generateYearView = (currentYear: number, minDate?: DateTime, maxDate?: DateTime) => {
  const yearsArray = [];

  const startYear = Math.max(currentYear - YEARS_OFFSET, minDate?.year ?? -Infinity);
  const endYear = Math.min(currentYear + YEARS_OFFSET, maxDate?.year ?? Infinity);

  for (let year = startYear; year <= endYear; year += 1) {
    const isDisabled = (minDate && year < minDate.year) || (maxDate && year > maxDate.year);

    yearsArray.push({
      ...DEFAULT_ITEM,
      date: DateTime.local(year, 1, 1),
      isDisabled,
      key: year.toString(),
      value: year.toString(),
    });
  }

  return yearsArray;
};
