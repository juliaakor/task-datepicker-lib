export enum View {
  Week = 'week',
  Month = 'month',
  Year = 'year',
}

export interface Holiday {
  id: string;
  startDate: string;
  endDate: string;
  name: string;
}

export interface Task {
  id: string;
  task: string;
  done: boolean;
  date: string;
}

export interface CalendarItemsProps {
  $showWeekends: boolean;
  $viewType: View;
}

export interface CalendarItemWrapperProps {
  $disabled?: boolean;
  $selected?: boolean;
  $rangeStart?: boolean;
  $rangeEnd?: boolean;
  $rangeInBetween?: boolean;
  $isDisabled?: boolean;
  $isHeaderItem?: boolean;
  $hasTasks?: boolean;
  $hasHolidays?: boolean;
}

export interface PopUpProps {
  $visible: boolean;
}

export interface InputItemProps {
  $isError: boolean;
}
