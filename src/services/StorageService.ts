import { Task } from '@type/index';

const CALENDAR_TASKS_ID = 'calendarTasks';

export class StorageService {
  static loadTasks(): Record<string, Task[]> {
    const tasks = localStorage.getItem(CALENDAR_TASKS_ID);

    return tasks ? JSON.parse(tasks) : {};
  }

  static saveTasks(tasks: Record<string, Task[]>): void {
    localStorage.setItem(CALENDAR_TASKS_ID, JSON.stringify(tasks));
  }
}
