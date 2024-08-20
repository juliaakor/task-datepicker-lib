import { StorageService } from '@services/StorageService';
import { TaskManagerService } from '@services/TaskManagerService';
import { Task } from '@type/index';

jest.mock('@services/StorageService', () => ({
  StorageService: {
    loadTasks: jest.fn(),
    saveTasks: jest.fn(),
  },
}));

const { loadTasks, saveTasks } = StorageService as jest.Mocked<typeof StorageService>;

describe('TaskManagerService', () => {
  const initialTasks: Record<string, Task[]> = {
    '2024-08-12': [{ date: '2024-08-12', done: false, id: '1', task: 'Initial Task' }],
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should initialize with tasks loaded from StorageService', () => {
    loadTasks.mockReturnValue(initialTasks);

    const service = new TaskManagerService();
    expect(service.getTasks()).toEqual(initialTasks);
  });

  it('should add a task and save it', () => {
    const service = new TaskManagerService();
    const newTask: Task = { date: '2024-08-12', done: false, id: '2', task: 'New Task' };

    loadTasks.mockReturnValue(initialTasks);
    service.addTask(newTask);

    expect(service.getTasks()).toEqual({
      '2024-08-12': [...initialTasks['2024-08-12'], newTask],
    });

    expect(saveTasks).toHaveBeenCalledWith({
      '2024-08-12': [...initialTasks['2024-08-12'], newTask],
    });
  });

  it('should update a task and save it', () => {
    const service = new TaskManagerService();
    const updatedTask: Task = { date: '2024-08-12', done: true, id: '1', task: 'Updated Task' };

    loadTasks.mockReturnValue(initialTasks);
    service.updateTask(updatedTask);

    expect(service.getTasks()).toEqual({
      '2024-08-12': [updatedTask],
    });

    expect(saveTasks).toHaveBeenCalledWith({
      '2024-08-12': [updatedTask],
    });
  });

  it('should delete a task and save changes', () => {
    const service = new TaskManagerService();
    const taskIdToDelete = '1';

    loadTasks.mockReturnValue(initialTasks);
    service.deleteTask('2024-08-12', taskIdToDelete);

    expect(service.getTasks()).toEqual({});
    expect(saveTasks).toHaveBeenCalledWith({});
  });

  it('should not modify tasks if deleting a non-existent task', () => {
    const service = new TaskManagerService();
    const nonExistentTaskId = '999';

    loadTasks.mockReturnValue(initialTasks);
    service.deleteTask('2024-08-12', nonExistentTaskId);

    expect(service.getTasks()).toEqual(initialTasks);
    expect(saveTasks).not.toHaveBeenCalled();
  });

  it('should handle adding a task to a new date', () => {
    const service = new TaskManagerService();
    const newTask: Task = { date: '2024-08-13', done: false, id: '2', task: 'Task for New Date' };

    loadTasks.mockReturnValue(initialTasks);
    service.addTask(newTask);

    expect(service.getTasks()).toEqual({
      '2024-08-12': initialTasks['2024-08-12'],
      '2024-08-13': [newTask],
    });

    expect(saveTasks).toHaveBeenCalledWith({
      '2024-08-12': initialTasks['2024-08-12'],
      '2024-08-13': [newTask],
    });
  });

  it('should not save if no tasks are present after deletion', () => {
    const service = new TaskManagerService();
    const emptyTaskList: Record<string, Task[]> = {};

    loadTasks.mockReturnValue(initialTasks);
    service.deleteTask('2024-08-12', '1');

    expect(service.getTasks()).toEqual(emptyTaskList);

    expect(saveTasks).toHaveBeenCalledWith(emptyTaskList);
  });
});
