import React from 'react';

import { NextIcon, PrevIcon } from '@assets/index';

import { DateTitle, HeaderContainer, IconButton } from './styled';
import { HeaderProps } from './types';

export const Header = ({ handleDateTitleClick, handleNextClick, handlePrevClick, title }: HeaderProps) => {
  return (
    <HeaderContainer>
      <IconButton onClick={handlePrevClick}>
        <PrevIcon />
      </IconButton>
      <DateTitle onClick={handleDateTitleClick}>{title}</DateTitle>
      <IconButton onClick={handleNextClick}>
        <NextIcon />
      </IconButton>
    </HeaderContainer>
  );
};
