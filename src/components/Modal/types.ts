import { Task } from '@type/index';

export interface ModalProps {
  show: boolean;
  tasks: Task[];
  onClose: () => void;
  onAddTask: (taskName: string) => void;
  onDeleteTask: (taskId: string) => void;
  onUpdateTask: (task: Task) => void;
}
