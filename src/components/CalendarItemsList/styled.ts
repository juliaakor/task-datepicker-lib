import styled from 'styled-components';

import { View } from '@constants/calendar';
import { CalendarItemsProps } from '@type/index';

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
