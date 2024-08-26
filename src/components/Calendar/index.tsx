import { DateTime } from 'luxon';
import React, { useEffect, useState } from 'react';

import { CalendarItem as CalendarItemType } from '@components/CalendarItem/types';
import { Modal, Input, Header, CalendarItem } from '@components/index';
import { ErrorBoundary, OutsideClickProvider } from '@components/utilities';
import { MONTH_OFFSET, WEEK_OFFSET, YEARS_OFFSET } from '@constants/calendar';
import { useTasks } from '@hooks/useTasks';
import {
  generateMonthView,
  generateWeekView,
  generateYearView,
  getCurrentDate,
  getHeaders,
  getRangeState,
} from '@lib/calendar';
import { View } from '@type/index';

import { Button, CalendarWrapper, Container, CalendarItems, CalendarContainter } from './styled';
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
  const {
    handleAddTask,
    handleCloseModal,
    handleDeleteTask,
    handleItemDoubleClick,
    handleUpdateTask,
    showModal,
    taskDate,
  } = useTasks(taskManager);

  const [isCalendarOpen, setIsCalendarOpen] = useState(isOpen);
  const [currentDate, setCurrentDate] = useState<DateTime>(getCurrentDate());
  const [days, setDays] = useState<CalendarItemType[]>([]);
  const [selectedDate, setSelectedDate] = useState<DateTime | null>(null);
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
          <OutsideClickProvider onOutsideClick={handleCalendarToggle}>
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
                      const inBetweenRange =
                        enableRange && startRange && endRange && date > startRange && date < endRange;

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
          </OutsideClickProvider>
        )}
      </CalendarContainter>
    </>
  );
};
