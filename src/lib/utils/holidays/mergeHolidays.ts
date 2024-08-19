import { Holiday } from '@type/index';

export const mergeHolidays = (defaultHolidays: Holiday[], customHolidays: Holiday[]): Holiday[] => {
  const holidayMap = new Map<string, Holiday>();

  defaultHolidays.forEach((holiday) => {
    holidayMap.set(holiday.id, holiday);
  });

  customHolidays.forEach((holiday) => {
    holidayMap.set(holiday.id, holiday);
  });

  return Array.from(holidayMap.values());
};
