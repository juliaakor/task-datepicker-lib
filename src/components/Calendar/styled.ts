import styled from 'styled-components';

import { View } from '@type/index';

export const Container = styled.div`
  ${({ theme }) => `
    min-width: ${theme.width.minCalerndar}px;
    border: ${`${theme.size.smallX}px solid ${theme.colors.primaryBorder}`};
    border-radius: ${theme.size.medium3X}px;
  `}
`;

export const CalendarWrapper = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  ${({ theme }) => `
    width: ${theme.width.full};
    padding: ${theme.size.large}px;
  `}
`;

export const CalendarItems = styled.div<{ $showWeekends: boolean; $viewType: View }>`
  display: grid;
  grid-template-columns: ${({ $showWeekends, $viewType }) => {
    if ($viewType === View.Year) {
      return 'repeat(4, auto)';
    }

    return $showWeekends ? 'repeat(7, 1fr)' : 'repeat(5, 1fr)';
  }};

  ${({ $viewType }) => `
    gap: ${$viewType === View.Year ? '10px' : '0px'};
    & > div {
      padding: ${$viewType === View.Year ? '5px' : '0px'};
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
