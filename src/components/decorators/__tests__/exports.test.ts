import * as index from '@components/decorators';
import { withCalendarHolidays } from '@components/decorators/WithCalendarHolidays';
import { withCalendarView } from '@components/decorators/WithCalendarView';
import { withCustomTheme } from '@components/decorators/WithCustomTheme';

describe('components folder index file exports', () => {
  it('should export withCalendarHolidays from index', () => {
    expect(index.withCalendarHolidays).toBe(withCalendarHolidays);
  });

  it('should export withCalendarView from index', () => {
    expect(index.withCalendarView).toBe(withCalendarView);
  });

  it('should export withCustomTheme from index', () => {
    expect(index.withCustomTheme).toBe(withCustomTheme);
  });
});
