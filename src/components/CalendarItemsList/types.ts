import { DateTime } from 'luxon';

import { CalendarProps } from '@components/Calendar/types';
import { CalendarItem } from '@components/CalendarItem/types';

export interface CalendarItemsListProps extends Omit<CalendarProps, 'label'> {
  showWeekends: boolean;
  currentDate: DateTime;
  enableRange: boolean;
  headerDays: string[];
  selectedDate?: DateTime | null;
  handleItemClick: (item: CalendarItem) => void;
  handleItemDoubleClick: (item: CalendarItem) => void;
}
