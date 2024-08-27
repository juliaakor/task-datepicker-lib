import { View } from '@type/index';

export interface WithCalendarViewProps {
  view: View;
  setView: () => void;
}

export interface CalendarViewServiceProps {
  supportedViews?: View[];
}
