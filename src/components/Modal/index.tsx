import React, { ChangeEvent, useState } from 'react';

import { ClearIcon, DeleteIcon, EditIcon } from '@assets/index';
import { TaskContent } from '@components/TaskContent';
import { ErrorBoundary, OutsideClickProvider, PortalProvider } from '@components/utilities';
import { Task } from '@type/index';

import {
  ModalOverlay,
  ModalContainer,
  ModalHeader,
  TaskList,
  TaskItem,
  AddButton,
  DeleteButton,
  CloseButton,
  Checkbox,
  EditButton,
  TextAreaField,
  InputContainer,
  Date,
} from './styled';
import { ModalProps } from './types';

const TEXT_AREA_FIELD_ROWS = 3;

export const Modal = ({ date, onAddTask, onClose, onDeleteTask, onUpdateTask, show, tasks }: ModalProps) => {
  const [newTask, setNewTask] = useState('');
  const [editTaskId, setEditTaskId] = useState<string | null>(null);
  const [editTaskName, setEditTaskName] = useState<string>('');

  const handleEditTextFieldChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setEditTaskName(e.target.value);
  };

  const handleTextFieldChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setNewTask(e.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim()) {
      onAddTask(newTask);
      setNewTask('');
    }
  };

  const handleEditTask = (task: Task) => () => {
    setEditTaskId(task.id);
    setEditTaskName(task.task);
  };

  const handleUpdateTask = () => {
    if (editTaskName.trim() && editTaskId) {
      const taskToUpdate = tasks.find((task) => task.id === editTaskId);

      if (taskToUpdate) {
        onUpdateTask({ ...taskToUpdate, task: editTaskName });
      }

      setEditTaskId(null);
      setEditTaskName('');
    }
  };

  const handleToggleDone = (task: Task) => () => {
    onUpdateTask({ ...task, done: !task.done });
  };

  const handleDeleteTask = (taskId: string) => () => {
    onDeleteTask(taskId);
  };

  return (
    <PortalProvider>
      <ModalOverlay $visible={show}>
        <OutsideClickProvider onOutsideClick={onClose}>
          <ErrorBoundary>
            <ModalContainer>
              <ModalHeader>
                <h2>Tasks</h2>
                <Date>{date}</Date>
                <CloseButton onClick={onClose}>
                  <ClearIcon />
                </CloseButton>
              </ModalHeader>

              <InputContainer>
                <TextAreaField
                  value={editTaskId ? editTaskName : newTask}
                  onChange={editTaskId ? handleEditTextFieldChange : handleTextFieldChange}
                  placeholder={editTaskId ? 'Edit task' : 'Add new task'}
                  rows={TEXT_AREA_FIELD_ROWS}
                />
                <AddButton onClick={editTaskId ? handleUpdateTask : handleAddTask}>
                  {editTaskId ? 'Update' : 'Add'}
                </AddButton>
              </InputContainer>

              <TaskList>
                {tasks.map((task) => (
                  <TaskItem key={task.id}>
                    <Checkbox type="checkbox" checked={task.done} onChange={handleToggleDone(task)} />
                    <TaskContent text={task.task} />
                    <div>
                      <EditButton onClick={handleEditTask(task)}>
                        <EditIcon />
                      </EditButton>
                      <DeleteButton onClick={handleDeleteTask(task.id)}>
                        <DeleteIcon />
                      </DeleteButton>
                    </div>
                  </TaskItem>
                ))}
              </TaskList>
            </ModalContainer>
          </ErrorBoundary>
        </OutsideClickProvider>
      </ModalOverlay>
    </PortalProvider>
  );
};
