import * as index from '@components/decorators';
import { withCalendarHolidays } from '@components/decorators/WithCalendarHolidays';
import { withCalendarView } from '@components/decorators/WithCalendarView';
import { withCustomTheme } from '@components/decorators/WithCustomTheme';
import { withTaskManager } from '@components/decorators/WithTaskManager';
import { withWeekendManager } from '@components/decorators/WithWeekendManager';

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

  it('should export withWeekendManager from index', () => {
    expect(index.withWeekendManager).toBe(withWeekendManager);
  });

  it('should export withTaskManager from index', () => {
    expect(index.withTaskManager).toBe(withTaskManager);
  });
});
