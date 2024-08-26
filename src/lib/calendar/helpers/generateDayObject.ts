import { DateTime } from 'luxon';

import { DEFAULT_ITEM } from '@constants/calendar';

export const generateDayObject = (date: DateTime, isDisabled: boolean = false) => ({
  ...DEFAULT_ITEM,
  date,
  isDisabled,
  key: date.toISODate(),
  value: date.day,
});
