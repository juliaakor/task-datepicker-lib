import { View } from '@type/index';

export interface WithCalendarViewProps {
  view: View;
  setView: (view: View) => void;
  availableViews: View[];
}

export interface CalendarViewServiceProps {
  supportedViews: View[];
}
