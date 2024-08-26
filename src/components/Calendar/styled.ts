import styled from 'styled-components';

import { FlexCenter } from '@styles/mixins';
import { CalendarItemsProps, View } from '@type/index';

export const CalendarContainter = styled.div`
  position: relative;
`;

export const Container = styled.div`
  position: absolute;
  z-index: 99;

  ${({ theme }) => `
    min-width: ${theme.width.minCalerndar}px;
    border: ${`${theme.size.smallX}px solid ${theme.colors.primaryBorder}`};
    border-radius: ${theme.size.medium3X}px;
    background: ${theme.colors.bgPrimary};
  `}
`;

export const CalendarWrapper = styled.span`
  ${FlexCenter}
  flex-direction: column;

  ${({ theme }) => `
    width: ${theme.width.full};
    padding: ${theme.size.large}px;
  `}
`;

export const CalendarItems = styled.div<CalendarItemsProps>`
  display: grid;
  grid-template-columns: ${({ $showWeekends, $viewType }) => {
    if ($viewType === View.Year) {
      return 'repeat(4, auto)';
    }

    return $showWeekends ? 'repeat(7, 1fr)' : 'repeat(5, 1fr)';
  }};

  ${({ $viewType, theme }) => `
    gap: ${$viewType === View.Year ? `${theme.size.large}px` : `${theme.size.reset}px`};

    & > div {
      padding: ${$viewType === View.Year ? `${theme.size.medium}px` : `${theme.size.reset}px`};
    }
  `};

  width: ${({ theme }) => theme.width.calendar}px;

  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Button = styled.button`
  ${({ theme }) => `
    width: ${theme.width.full};
    border-top: ${`${theme.size.smallX}px solid ${theme.colors.primaryBorder}`};
    border-radius: ${theme.size.reset} ${theme.size.reset} ${`${theme.size.medium3X}px ${theme.colors.medium3X}px`};
    padding: ${theme.size.large}px;
    font-size: ${theme.fontSize.small}px;
    font-weight: ${theme.fontWeight.semiBold};

    &:hover {
      background: ${theme.colors.bgButtonOnHover};
    }
  `}
`;
