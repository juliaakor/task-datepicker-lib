import React, { useState, useMemo } from 'react';

import { CalendarViewService } from '@services/CalendarViewService';
import { View } from '@type/index';

import { CalendarViewServiceProps, WithCalendarViewProps } from './types';

export const withCalendarView = <P extends object>(
  WrappedComponent: React.ComponentType<P & WithCalendarViewProps>
) => {
  const WithCalendarView = (props: Omit<P, keyof WithCalendarViewProps> & CalendarViewServiceProps) => {
    const { supportedViews, ...restProps } = props;

    const calendarViewService = useMemo(() => new CalendarViewService(supportedViews), [supportedViews]);
    const [view, setView] = useState(calendarViewService.getView());

    const handleSetView = (newView: View) => {
      calendarViewService.setView(newView);
      setView(calendarViewService.getView());
    };

    return (
      <WrappedComponent
        {...(restProps as P)}
        view={view}
        setView={handleSetView}
        availableViews={calendarViewService.getAvailableViews()}
      />
    );
  };

  WithCalendarView.displayName = `WithCalendarView(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return WithCalendarView;
};
