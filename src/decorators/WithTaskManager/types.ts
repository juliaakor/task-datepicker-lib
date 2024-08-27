import { Task } from '@type/index';

export interface TaskManagerType {
  addTask: (task: Task) => void;
  updateTask: (task: Task) => void;
  deleteTask: (date: string, taskId: string) => void;
}

export interface TaskManagerProps {
  tasks: Record<string, Task[]>;
  taskManager: TaskManagerType;
}
