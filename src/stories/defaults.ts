import { getCurrentDate } from '@lib/calendar/getCurrentDate';

export const defaultConfig = {
  enableHolidays: false,
  enableTasks: false,
  enableViewToggle: false,
  enableWeekends: false,
};

export const defaultRange = {
  maxDate: getCurrentDate().plus({ years: 1 }),
  minDate: getCurrentDate().minus({ years: 1 }),
};

export const defaultCustomHolidays = {
  customHolidays: [
    {
      endDate: '2024-08-22',
      id: '12345',
      name: 'Random Holiday',
      startDate: '2024-08-22',
    },
    {
      endDate: '2024-08-22',
      id: '1234',
      name: 'Random Holiday 2',
      startDate: '2024-08-22',
    },
  ],
};
