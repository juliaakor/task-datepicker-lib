import { Holiday } from '@type/index';

import { HolidaysResponse } from './types';

export const formatResToHolidays = (holidays: HolidaysResponse[]): Holiday[] => {
  return holidays.map((holiday) => ({
    endDate: holiday.endDate,
    id: holiday.id,
    name: holiday.name[0].text,
    startDate: holiday.startDate,
  }));
};
