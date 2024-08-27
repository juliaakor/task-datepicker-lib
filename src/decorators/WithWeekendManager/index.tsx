import React, { useState, useMemo } from 'react';

import { WeekendManagerService } from '@services/WeekendManagerService';

import { WithWeekendManagerProps, WithWeekendManagerServiceProps } from './types';

export const withWeekendManager = <P extends object>(
  WrappedComponent: React.ComponentType<P & WithWeekendManagerProps>
) => {
  const WithWeekendManager = (props: Omit<P, keyof WithWeekendManagerProps> & WithWeekendManagerServiceProps) => {
    const { isWeekStartOnMonday = true, showWeekends = true, ...restProps } = props;

    const weekendManagerService = useMemo(
      () => new WeekendManagerService(showWeekends, isWeekStartOnMonday),
      [showWeekends, isWeekStartOnMonday]
    );

    const [isWeekendsVisible, setWeekendsVisible] = useState(weekendManagerService.getWeekendsVisibility());

    const toggleWeekends = () => {
      weekendManagerService.toggleWeekendsVisibility();
      setWeekendsVisible(weekendManagerService.getWeekendsVisibility());
    };

    return (
      <WrappedComponent
        {...(restProps as P)}
        showWeekends={isWeekendsVisible}
        isWeekStartOnMonday={isWeekStartOnMonday}
        toggleWeekends={toggleWeekends}
      />
    );
  };

  WithWeekendManager.displayName = `WithWeekendManager(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return WithWeekendManager;
};
