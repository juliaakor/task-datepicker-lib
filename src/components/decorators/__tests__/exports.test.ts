import * as index from '@components/decorators';
import { withCalendarView } from '@components/decorators/WithCalendarView';
import { withCustomTheme } from '@components/decorators/WithCustomTheme';
import { withTaskManager } from '@components/decorators/WithTaskManager';

describe('components folder index file exports', () => {
  it('should export withCalendarView from index', () => {
    expect(index.withCalendarView).toBe(withCalendarView);
  });

  it('should export withCustomTheme from index', () => {
    expect(index.withCustomTheme).toBe(withCustomTheme);
  });

  it('should export withTaskManager from index', () => {
    expect(index.withTaskManager).toBe(withTaskManager);
  });
});
