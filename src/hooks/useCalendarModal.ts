import { useState } from 'react';

export const useCalendarModal = (isOpen: boolean) => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(isOpen);

  const handleCalendarToggle = () => {
    setIsCalendarOpen((prev) => !prev);
  };

  const handleCalendarInputFocus = () => {
    setIsCalendarOpen(true);
  };

  return { handleCalendarInputFocus, handleCalendarToggle, isCalendarOpen };
};
