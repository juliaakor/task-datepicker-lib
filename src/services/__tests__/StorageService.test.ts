import { StorageService } from '@services/StorageService';
import { Task } from '@type/index';

const mockLocalStorage: {
  [key: string]: string | null;
} = {};

beforeEach(() => {
  jest.resetModules();
  global.localStorage = {
    clear: jest.fn(() => {
      Object.keys(mockLocalStorage).forEach((key) => {
        delete mockLocalStorage[key];
      });
    }),
    getItem: jest.fn((key) => mockLocalStorage[key] || null),
    removeItem: jest.fn((key) => {
      delete mockLocalStorage[key];
    }),
    setItem: jest.fn((key, value) => {
      mockLocalStorage[key] = value;
    }),
  } as unknown as Storage;
});

describe('StorageService', () => {
  const mockTasks: Record<string, Task[]> = {
    '2024-08-12': [{ date: '2024-08-12', done: false, id: '1', task: 'Task 1' }],
  };

  it('should load tasks from localStorage', () => {
    mockLocalStorage.calendarTasks = JSON.stringify(mockTasks);

    const tasks = StorageService.loadTasks();
    expect(tasks).toEqual(mockTasks);
  });

  it('should return an empty object if no tasks are in localStorage', () => {
    delete mockLocalStorage.calendarTasks;

    const tasks = StorageService.loadTasks();
    expect(tasks).toEqual({});
  });

  it('should save tasks to localStorage', () => {
    StorageService.saveTasks(mockTasks);
    expect(mockLocalStorage.calendarTasks).toBe(JSON.stringify(mockTasks));
  });
});
