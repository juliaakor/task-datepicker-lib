import React, { useState, useMemo, useCallback } from 'react';

import { CalendarViewService } from '@services/CalendarViewService';
import { View } from '@type/index';

import { CalendarViewServiceProps, WithCalendarViewProps } from './types';

export const withCalendarView = <P extends object>(
  WrappedComponent: React.ComponentType<P & WithCalendarViewProps>
) => {
  const WithCalendarView = (props: Omit<P, keyof WithCalendarViewProps> & CalendarViewServiceProps) => {
    const { supportedViews = [View.Month], ...restProps } = props;

    const calendarViewService = useMemo(() => new CalendarViewService(supportedViews), [supportedViews]);
    const [view, setView] = useState(calendarViewService.getView());

    const handleSetView = useCallback(
      (newView: View) => {
        calendarViewService.setView(newView);

        setView(calendarViewService.getView());
      },
      [calendarViewService]
    );

    const changeToNextView = useCallback(() => {
      const nextIndex = (supportedViews.indexOf(view) + 1) % supportedViews.length;
      const nextView = supportedViews[nextIndex];

      handleSetView(nextView);
    }, [view, supportedViews, handleSetView]);

    return <WrappedComponent {...(restProps as P)} view={view} setView={changeToNextView} />;
  };

  WithCalendarView.displayName = `WithCalendarView(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return WithCalendarView;
};
