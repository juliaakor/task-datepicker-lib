import { View } from '@constants/calendar';

export interface WithCalendarViewProps {
  view: View;
  setView: () => void;
}

export interface CalendarViewServiceProps {
  supportedViews?: View[];
}
