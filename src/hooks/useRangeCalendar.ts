import { DateTime } from 'luxon';
import { useState } from 'react';

export const useRangeCalendar = () => {
  const [fromDate, setFromDate] = useState<DateTime | null>(null);
  const [toDate, setToDate] = useState<DateTime | null>(null);

  const handleFromDateChange = (date: DateTime) => {
    if (toDate && date > toDate) {
      setToDate(null);
    }
    setFromDate(date);
  };

  const handleToDateChange = (date: DateTime) => {
    if (fromDate && date < fromDate) {
      setFromDate(null);
    }
    setToDate(date);
  };

  const inputFromDate = fromDate?.toFormat('yyyy-MM-dd');
  const inputToDate = toDate?.toFormat('yyyy-MM-dd');

  return {
    fromDate,
    handleFromDateChange,
    handleToDateChange,
    inputFromDate,
    inputToDate,
    toDate,
  };
};
