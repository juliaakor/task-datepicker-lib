import { DateTime } from 'luxon';

import { WEEK_DAYS_FROM_MON, WEEK_DAYS_FROM_SUN } from '@constants/calendar';
import { View } from '@type/index';

export const getHeaders = (currentDate: DateTime, view: View, isWeekStartOnMonday: boolean, showWeekends: boolean) => {
  let headerDays = isWeekStartOnMonday ? WEEK_DAYS_FROM_MON : WEEK_DAYS_FROM_SUN;
  if (!showWeekends) headerDays = headerDays.filter((day) => day !== 'Su' && day !== 'Sa');

  const headerTitle = view === View.Year ? currentDate.toFormat('yyyy') : currentDate.toFormat('MMMM yyyy');

  return { headerDays, headerTitle };
};
