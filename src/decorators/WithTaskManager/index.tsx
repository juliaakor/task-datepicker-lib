import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { TaskManagerService } from '@services/TaskManagerService';
import { Task } from '@type/index';

import { TaskManagerProps } from './types';

export const withTaskManager = <P extends object>(WrappedComponent: React.ComponentType<P & TaskManagerProps>) => {
  const WithTaskManager = (props: Omit<P, keyof TaskManagerProps>) => {
    const [tasks, setTasks] = useState<Record<string, Task[]>>({});

    const taskManagerService = useMemo(() => new TaskManagerService(), []);

    const updateTasks = useCallback(() => {
      setTasks(taskManagerService.getTasks());
    }, [taskManagerService]);

    useEffect(() => {
      updateTasks();
    }, [updateTasks]);

    const taskManager = {
      addTask: (task: Task) => {
        taskManagerService.addTask(task);
        updateTasks();
      },
      deleteTask: (date: string, taskId: string) => {
        taskManagerService.deleteTask(date, taskId);
        updateTasks();
      },
      updateTask: (task: Task) => {
        taskManagerService.updateTask(task);
        updateTasks();
      },
    };

    return <WrappedComponent {...(props as P)} tasks={tasks} taskManager={taskManager} />;
  };

  WithTaskManager.displayName = `WithTaskManager(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return WithTaskManager;
};
