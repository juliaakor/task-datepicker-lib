import { DateTime } from 'luxon';
import React, { useState } from 'react';

import { CalendarItem as CalendarItemType } from '@components/CalendarItem/types';
import { Modal, Input, Header, CalendarItemsList } from '@components/index';
import { ErrorBoundary } from '@components/utilities';
import { MONTH_OFFSET, WEEK_OFFSET, YEARS_OFFSET } from '@constants/calendar';
import { useCalendarModal } from '@hooks/useCalendarModal';
import { useTasks } from '@hooks/useTasks';
import { getCurrentDate, getHeaders } from '@lib/calendar';
import { View } from '@type/index';

import { Button, CalendarWrapper, Container, CalendarContainter } from './styled';
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
}: CalendarProps) => {
  const { handleCalendarInputFocus, handleCalendarToggle, isCalendarOpen } = useCalendarModal(isOpen);

  const {
    handleAddTask,
    handleCloseModal,
    handleDeleteTask,
    handleItemDoubleClick,
    handleUpdateTask,
    showModal,
    taskDate,
  } = useTasks(taskManager);

  const [currentDate, setCurrentDate] = useState<DateTime>(getCurrentDate());
  const [selectedDate, setSelectedDate] = useState<DateTime | null>(null);
  const [input, setInput] = useState(inputValue || '');

  const { headerDays, headerTitle } = getHeaders(currentDate, view, isWeekStartOnMonday, showWeekends);

  const handleViewChange = () => {
    setView?.();
  };

  const updateDate = (unit: View, amount: number) => {
    const newDate = currentDate.plus({ [unit]: amount });

    setCurrentDate(newDate);
  };

  const handleHeaderControlsClick = (isNextDate: boolean) => () => {
    if (view === View.Month) {
      updateDate(View.Month, isNextDate ? MONTH_OFFSET : -MONTH_OFFSET);
    }

    if (view === View.Week) {
      updateDate(View.Week, isNextDate ? WEEK_OFFSET : -WEEK_OFFSET);
    }

    if (view === View.Year) {
      updateDate(View.Year, isNextDate ? YEARS_OFFSET : -YEARS_OFFSET);
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

  const handleClearInput = () => {
    setInput('');
    setSelectedDate(null);
  };

  return (
    <>
      <Modal
        show={showModal}
        tasks={tasks?.[taskDate?.toISODate() || ''] || []}
        onClose={handleCloseModal}
        onAddTask={handleAddTask}
        onDeleteTask={handleDeleteTask}
        onUpdateTask={handleUpdateTask}
        date={taskDate?.toFormat('LLLL dd, yyyy')}
      />
      <CalendarContainter>
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
                <CalendarItemsList
                  enableRange={enableRange}
                  startRange={startRange}
                  endRange={endRange}
                  holidays={holidays}
                  showWeekends={showWeekends}
                  currentDate={currentDate}
                  headerDays={headerDays}
                  selectedDate={selectedDate}
                  view={view}
                  tasks={tasks}
                  handleItemDoubleClick={handleItemDoubleClick}
                  handleItemClick={handleItemClick}
                  isWeekStartOnMonday={isWeekStartOnMonday}
                />
              </CalendarWrapper>
            </ErrorBoundary>
            {!enableRange && input && <Button onClick={handleClearInput}>Clear</Button>}
          </Container>
        )}
      </CalendarContainter>
    </>
  );
};
