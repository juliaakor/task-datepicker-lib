import { Task } from '@type/index';

export interface TaskManagerProps {
  tasks: Record<string, Task[]>;
  taskManager: {
    addTask: (task: Task) => void;
    updateTask: (task: Task) => void;
    deleteTask: (date: string, taskId: string) => void;
  };
}
