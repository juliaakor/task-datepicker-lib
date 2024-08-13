import { Task } from '@type/index';

import { StorageService } from './StorageService';

export class TaskManagerService {
  private tasks: Record<string, Task[]>;

  constructor() {
    this.tasks = StorageService.loadTasks();
  }

  saveTasks(): void {
    StorageService.saveTasks(this.tasks);
  }

  addTask(task: Task): void {
    this.tasks = {
      ...this.tasks,
      [task.date]: this.tasks[task.date] ? [...this.tasks[task.date], task] : [task],
    };

    this.saveTasks();
  }

  updateTask(updatedTask: Task): void {
    if (this.tasks[updatedTask.date]) {
      this.tasks = {
        ...this.tasks,
        [updatedTask.date]: this.tasks[updatedTask.date].map((task) =>
          task.id === updatedTask.id ? updatedTask : task
        ),
      };

      this.saveTasks();
    }
  }

  deleteTask(date: string, taskId: string): void {
    if (!this.tasks[date]) return;

    const updatedTasks = this.tasks[date].filter((task) => task.id !== taskId);

    const isUpdated = updatedTasks.length !== this.tasks[date].length;

    if (updatedTasks.length === 0) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { [date]: _, ...restTasks } = this.tasks;
      this.tasks = restTasks;
    } else if (isUpdated) {
      this.tasks = {
        ...this.tasks,
        [date]: updatedTasks,
      };
    }

    if (isUpdated || updatedTasks.length === 0) {
      this.saveTasks();
    }
  }

  getTasks(): Record<string, Task[]> {
    return this.tasks;
  }
}
