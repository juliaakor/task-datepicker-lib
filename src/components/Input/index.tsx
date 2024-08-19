import React, { ChangeEvent } from 'react';

import { CalendarIcon, ClearIcon } from '@assets/index';

import { InputWrapper, InputItem, Label, CalendarButtonWrapper, ClearButtonWrapper } from './styled';
import { InputProps } from './types';

export const Input = ({
  isError = false,
  label,
  name,
  onChange,
  onFocus,
  placeholder = 'Choose Date',
  value,
}: InputProps) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const handleClearInput = () => {
    onChange('');
  };

  return (
    <div>
      <Label>{name}</Label>
      <InputWrapper>
        <CalendarButtonWrapper>
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
