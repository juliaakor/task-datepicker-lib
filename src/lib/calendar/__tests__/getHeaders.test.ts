import { DateTime } from 'luxon';

import { WEEK_DAYS_FROM_MON, WEEK_DAYS_FROM_SUN } from '@constants/calendar';
import { getHeaders } from '@lib/calendar/getHeaders';
import { View } from '@type/index';

describe('getHeaders', () => {
  const testCases = [
    {
      date: DateTime.local(2024, 1, 15),
      expectedDays: WEEK_DAYS_FROM_MON,
      expectedTitle: 'January 2024',
      isWeekStartOnMonday: true,
      showWeekends: true,
      view: View.Month,
    },
    {
      date: DateTime.local(2023, 12, 1),
      expectedDays: WEEK_DAYS_FROM_SUN,
      expectedTitle: 'December 2023',
      isWeekStartOnMonday: false,
      showWeekends: true,
      view: View.Month,
    },
    {
      date: DateTime.local(2022, 6, 10),
      expectedDays: WEEK_DAYS_FROM_MON.filter((day) => day !== 'Su' && day !== 'Sa'),
      expectedTitle: 'June 2022',
      isWeekStartOnMonday: true,
      showWeekends: false,
      view: View.Month,
    },
    {
      date: DateTime.local(2021, 3, 25),
      expectedDays: WEEK_DAYS_FROM_SUN.filter((day) => day !== 'Su' && day !== 'Sa'),
      expectedTitle: 'March 2021',
      isWeekStartOnMonday: false,
      showWeekends: false,
      view: View.Month,
    },
    {
      date: DateTime.local(2024, 8, 25),
      expectedDays: WEEK_DAYS_FROM_MON,
      expectedTitle: '2024',
      isWeekStartOnMonday: true,
      showWeekends: true,
      view: View.Year,
    },
    {
      date: DateTime.local(2020, 5, 15),
      expectedDays: WEEK_DAYS_FROM_SUN,
      expectedTitle: '2020',
      isWeekStartOnMonday: false,
      showWeekends: true,
      view: View.Year,
    },
    {
      date: DateTime.local(2019, 7, 10),
      expectedDays: WEEK_DAYS_FROM_MON,
      expectedTitle: 'July 2019',
      isWeekStartOnMonday: true,
      showWeekends: true,
      view: View.Month,
    },
    {
      date: DateTime.local(2025, 11, 3),
      expectedDays: WEEK_DAYS_FROM_SUN.filter((day) => day !== 'Su' && day !== 'Sa'),
      expectedTitle: 'November 2025',
      isWeekStartOnMonday: false,
      showWeekends: false,
      view: View.Month,
    },
    {
      date: DateTime.local(2021, 2, 14),
      expectedDays: WEEK_DAYS_FROM_MON,
      expectedTitle: '2021',
      isWeekStartOnMonday: true,
      showWeekends: true,
      view: View.Year,
    },
    {
      date: DateTime.local(2022, 9, 30),
      expectedDays: WEEK_DAYS_FROM_SUN,
      expectedTitle: 'September 2022',
      isWeekStartOnMonday: false,
      showWeekends: true,
      view: View.Month,
    },
  ];

  testCases.forEach(({ date, expectedDays, expectedTitle, isWeekStartOnMonday, showWeekends, view }) => {
    test(`returns correct headers for date ${date.toFormat('yyyy-MM-dd')} with view ${view}, week start on ${isWeekStartOnMonday ? 'Monday' : 'Sunday'}, ${showWeekends ? 'with' : 'without'} weekends`, () => {
      const result = getHeaders(date, view, isWeekStartOnMonday, showWeekends);
      expect(result.headerDays).toEqual(expectedDays);
      expect(result.headerTitle).toBe(expectedTitle);
    });
  });
});
