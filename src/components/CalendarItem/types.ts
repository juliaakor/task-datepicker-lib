export interface CalendarItem {
  isDisabled?: boolean;
  rangeEnd?: boolean;
  rangeInBetween?: boolean;
  rangeStart?: boolean;
  selected?: boolean;
  value: number;
}

export interface CalendarItemProps extends CalendarItem {
  onClick?: (item: CalendarItem) => void;
}
