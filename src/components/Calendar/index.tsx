import { DateTime } from 'luxon';
import React, { useEffect, useState } from 'react';

import { CalendarItem as CalendarItemType } from '@components/CalendarItem/types';
import { Modal, Input, Header, CalendarItem } from '@components/index';
import { ErrorBoundary } from '@components/utilities';
import {
  generateMonthView,
  generateWeekView,
  generateYearView,
  getCurrentDate,
  getHeaders,
  getRangeState,
} from '@lib/calendar';
import { Task, View } from '@type/index';

import { Button, CalendarWrapper, Container, CalendarItems } from './styled';
import { CalendarProps } from './types';

export const Calendar = ({
  enableRange = false,
  endRange,
  holidays,
  inputValue,
  isOpen = false,
  isWeekStartOnMonday = false,
  label = 'Date',
  maxDate,
  minDate,
  onDateSelect,
  setView,
  showWeekends = true,
  startRange,
  taskManager,
  tasks,
  view = View.Month,
}: CalendarProps & { minDate?: DateTime; maxDate?: DateTime }) => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(isOpen);
  const [currentDate, setCurrentDate] = useState<DateTime>(getCurrentDate());
  const [days, setDays] = useState<CalendarItemType[]>([]);
  const [selectedDate, setSelectedDate] = useState<DateTime | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [input, setInput] = useState(inputValue || '');

  const { headerDays, headerTitle } = getHeaders(currentDate, view, isWeekStartOnMonday, showWeekends);

  useEffect(() => {
    if (view === View.Month) {
      setDays(
        generateMonthView(currentDate.year, currentDate.month, minDate, maxDate, isWeekStartOnMonday, showWeekends)
      );
    }

    if (view === View.Week) {
      setDays(generateWeekView(currentDate, minDate, maxDate, isWeekStartOnMonday, showWeekends));
    }

    if (view === View.Year) {
      setDays(generateYearView(currentDate.year, minDate, maxDate));
    }
  }, [currentDate, isWeekStartOnMonday, maxDate, minDate, showWeekends, view]);

  const handleViewChange = () => {
    setView?.();
  };

  const handleCalendarToggle = () => {
    setIsCalendarOpen((prev) => !prev);
  };

  const handleCalendarInputFocus = () => {
    setIsCalendarOpen(true);
  };

  const updateDate = (unit: View, amount: number) => {
    const newDate = currentDate.plus({ [unit]: amount });

    setCurrentDate(newDate);
  };

  const handleHeaderControlsClick = (isNextDate: boolean) => () => {
    if (view === View.Month) {
      updateDate(View.Month, isNextDate ? 1 : -1);
    }

    if (view === View.Week) {
      updateDate(View.Week, isNextDate ? 1 : -1);
    }

    if (view === View.Year) {
      updateDate(View.Year, isNextDate ? 5 : -5);
    }
  };

  const handleItemClick = (item: CalendarItemType) => {
    if (item.isDisabled) return;

    const itemDate = item.date || currentDate;

    setInput(itemDate.toFormat('yyyy-MM-dd'));
    setSelectedDate(itemDate);
    onDateSelect?.(itemDate);
  };

  const handleInputChange = (value: string) => {
    setInput(value);

    const parsedDate = DateTime.fromISO(value);

    if (parsedDate.isValid) {
      if ((!minDate || parsedDate >= minDate) && (!maxDate || parsedDate <= maxDate)) {
        setCurrentDate(parsedDate);
        setSelectedDate(parsedDate);

        if (enableRange && value.length === 10) onDateSelect?.(parsedDate);
      }
    }
  };

  const handleItemDoubleClick = (item: CalendarItemType) => {
    if (!taskManager) return;

    if (!item.isDisabled) {
      const itemDate = item.date || getCurrentDate();
      setSelectedDate(itemDate);
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleAddTask = (taskName: string) => {
    if (selectedDate) {
      const newTask: Task = {
        date: selectedDate.toISODate() || '',
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
    if (selectedDate) {
      taskManager?.deleteTask(selectedDate.toISODate() || '', taskId);
    }
  };

  const handleClearInput = () => {
    setInput('');
    setSelectedDate(null);
  };

  return (
    <>
      <Modal
        show={showModal}
        tasks={tasks?.[selectedDate?.toISODate() || ''] || []}
        onClose={handleCloseModal}
        onAddTask={handleAddTask}
        onDeleteTask={handleDeleteTask}
        onUpdateTask={handleUpdateTask}
      />
      <Input
        onFocus={handleCalendarInputFocus}
        label={label}
        name={label}
        value={input}
        onChange={handleInputChange}
        toggleCalendar={handleCalendarToggle}
      />
      {isCalendarOpen && (
        <Container>
          <ErrorBoundary>
            <CalendarWrapper>
              <Header
                title={headerTitle}
                handleNextClick={handleHeaderControlsClick(true)}
                handlePrevClick={handleHeaderControlsClick(false)}
                handleDateTitleClick={handleViewChange}
              />
              <CalendarItems $showWeekends={showWeekends} $viewType={view || View.Month}>
                {view !== View.Year && headerDays.map((day) => <CalendarItem key={day} value={day} isHeaderItem />)}

                {days.map(({ date = currentDate, isDisabled, rangeEnd, rangeInBetween, rangeStart, value }) => {
                  const holidaysForDate = holidays?.filter((holiday) =>
                    DateTime.fromISO(holiday.startDate).hasSame(date, 'day')
                  );

                  const rangeState = getRangeState(enableRange, date, startRange, endRange);
                  const inBetweenRange = enableRange && startRange && endRange && date > startRange && date < endRange;

                  const isSelected =
                    selectedDate && date.toFormat('yyyy-MM-dd') === selectedDate.toFormat('yyyy-MM-dd');

                  const hasTasks = Boolean(tasks?.[date?.toISODate() || '']?.length);

                  return (
                    <CalendarItem
                      onClick={handleItemClick}
                      onDoubleClick={handleItemDoubleClick}
                      date={date}
                      key={date?.toISODate()}
                      value={value}
                      isDisabled={isDisabled}
                      rangeStart={rangeState.rangeStart || rangeStart}
                      rangeEnd={rangeState.rangeEnd || rangeEnd}
                      selected={enableRange ? false : isSelected || false}
                      rangeInBetween={inBetweenRange || rangeInBetween}
                      hasTasks={hasTasks}
                      holidays={holidaysForDate}
                    />
                  );
                })}
              </CalendarItems>
            </CalendarWrapper>
          </ErrorBoundary>
          {!enableRange && <Button onClick={handleClearInput}>Clear</Button>}
        </Container>
      )}
    </>
  );
};
