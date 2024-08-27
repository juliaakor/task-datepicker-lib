import { CalendarProps } from '@components/Calendar/types';
import { WithCalendarHolidaysServiceProps } from '@decorators/WithCalendarHolidays/types';
import { CalendarViewServiceProps } from '@decorators/WithCalendarView/types';
import { WithWeekendManagerServiceProps } from '@decorators/WithWeekendManager/types';

export interface CalendarConfig {
  enableHolidays?: boolean;
  enableTasks?: boolean;
  enableWeekends?: boolean;
  enableViewToggle?: boolean;
}

export interface CalendarWrapperProps
  extends WithCalendarHolidaysServiceProps,
    CalendarViewServiceProps,
    WithWeekendManagerServiceProps,
    CalendarProps {
  config: CalendarConfig;
}
