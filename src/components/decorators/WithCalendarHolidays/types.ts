import { Holiday } from '@type/index';

export interface WithCalendarHolidaysProps {
  holidays: Holiday[];
  handleRangeChange: (startDate: string, endDate: string) => void;
}

export interface WithCalendarHolidaysServiceProps {
  includeDefaultHolidays?: boolean;
  customHolidays?: Holiday[];
}
