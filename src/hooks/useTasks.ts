import { DateTime } from 'luxon';
import { useState } from 'react';

import { getCurrentDate } from '@/lib/calendar';
import { Task } from '@/types';
import { CalendarItem as CalendarItemType } from '@components/CalendarItem/types';
import { TaskManagerType } from '@decorators/WithTaskManager/types';

export const useTasks = (taskManager?: TaskManagerType) => {
  const [taskDate, setTaskDate] = useState<DateTime | null>(null);
  const [showModal, setShowModal] = useState(false);

  const handleItemDoubleClick = (item: CalendarItemType) => {
    if (!taskManager) return;

    if (!item.isDisabled) {
      const itemDate = item.date || getCurrentDate();
      setTaskDate(itemDate);
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleAddTask = (taskName: string) => {
    if (taskDate) {
      const newTask: Task = {
        date: taskDate.toISODate() || '',
        done: false,
        id: Date.now().toString(),
        task: taskName,
      };

      taskManager?.addTask(newTask);
    }
  };

  const handleUpdateTask = (task: Task) => {
    taskManager?.updateTask(task);
  };

  const handleDeleteTask = (taskId: string) => {
    if (taskDate) {
      taskManager?.deleteTask(taskDate.toISODate() || '', taskId);
    }
  };

  return {
    handleAddTask,
    handleCloseModal,
    handleDeleteTask,
    handleItemDoubleClick,
    handleUpdateTask,
    showModal,
    taskDate,
  };
};
