import React, { ChangeEvent } from 'react';

import { CalendarIcon, ClearIcon } from '@assets/index';
import { formatDateInput } from '@lib/utils/format';

import { InputWrapper, InputItem, Label, CalendarButtonWrapper, ClearButtonWrapper } from './styled';
import { InputProps } from './types';

export const Input = ({
  isError = false,
  label,
  name,
  onChange,
  onFocus,
  placeholder = 'Choose Date',
  toggleCalendar,
  value,
}: InputProps) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    const formattedInputValue = formatDateInput(input);

    onChange(formattedInputValue);
  };

  const handleClearInput = () => {
    onChange('');
  };

  const handleCalendarVisibility = () => {
    toggleCalendar();
  };

  return (
    <div>
      <Label>{name}</Label>
      <InputWrapper>
        <CalendarButtonWrapper onClick={handleCalendarVisibility}>
          <CalendarIcon />
        </CalendarButtonWrapper>
        <InputItem
          id={label}
          name={name}
          placeholder={placeholder}
          value={value}
          $isError={isError}
          onChange={handleInputChange}
          onFocus={onFocus}
          autoComplete="off"
          maxLength={10}
        />
        {value && (
          <ClearButtonWrapper onClick={handleClearInput}>
            <ClearIcon />
          </ClearButtonWrapper>
        )}
      </InputWrapper>
    </div>
  );
};
