import React from 'react';

import { TaskManagerService } from '@services/TaskManagerService';
import { Task } from '@type/index';

import { TaskManagerProps } from './types';

export const withTaskManager = <P extends object>(WrappedComponent: React.ComponentType<P & TaskManagerProps>) => {
  const WithTaskManager = (props: Omit<P, keyof TaskManagerProps>) => {
    const taskManagerService = new TaskManagerService();

    const taskManager = {
      addTask: (task: Task) => taskManagerService.addTask(task),
      deleteTask: (date: string, taskId: string) => taskManagerService.deleteTask(date, taskId),
      updateTask: (task: Task) => taskManagerService.updateTask(task),
    };

    return <WrappedComponent {...(props as P)} tasks={taskManagerService.getTasks()} taskManager={taskManager} />;
  };

  WithTaskManager.displayName = `WithTaskManager(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return WithTaskManager;
};
