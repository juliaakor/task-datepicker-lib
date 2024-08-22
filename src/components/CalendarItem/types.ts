import { DateTime } from 'luxon';

import { Holiday, Task } from '@type/index';

export interface CalendarItem {
  isDisabled?: boolean;
  rangeEnd?: boolean;
  rangeInBetween?: boolean;
  rangeStart?: boolean;
  selected?: boolean;
  value: number | string;
  isHeaderItem?: boolean;
  holidays?: Holiday[];
  tasks?: Task[];
  date?: DateTime;
  hasTasks?: boolean;
}

export interface CalendarItemProps extends CalendarItem {
  onClick?: (item: CalendarItem) => void;
  onDoubleClick?: (item: CalendarItem) => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}
