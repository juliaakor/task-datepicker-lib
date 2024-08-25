import { DateTime } from 'luxon';

import { WithCalendarHolidaysProps } from '@decorators/WithCalendarHolidays/types';
import { WithCalendarViewProps } from '@decorators/WithCalendarView/types';
import { TaskManagerProps } from '@decorators/WithTaskManager/types';
import { WithWeekendManagerProps } from '@decorators/WithWeekendManager/types';

export interface CalendarProps
  extends Partial<WithCalendarHolidaysProps>,
    Partial<TaskManagerProps>,
    Partial<WithCalendarViewProps>,
    Partial<WithWeekendManagerProps> {
  maxDate?: DateTime;
  minDate?: DateTime;
  isOpen?: boolean;
  enableRange?: boolean;
  startRange?: DateTime | null;
  endRange?: DateTime | null;
  inputValue?: string;
  label: string;
  onDateSelect?: (date: DateTime) => void;
}
