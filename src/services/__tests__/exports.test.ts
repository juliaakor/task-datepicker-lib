import { CalendarViewService } from '@services/CalendarViewService';
import * as index from '@services/index';
import { TaskManagerService } from '@services/TaskManagerService';

describe('components folder index file exports', () => {
  it('should export CalendarViewService from index', () => {
    expect(index.CalendarViewService).toBe(CalendarViewService);
  });

  it('should export TaskManagerService from index', () => {
    expect(index.TaskManagerService).toBe(TaskManagerService);
  });
});
