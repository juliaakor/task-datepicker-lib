import styled from 'styled-components';

import { NoUserSelect } from '@styles/mixins';
import { CalendarItemWrapperProps, PopUpProps } from '@type/index';

export const CalendarItemWrapper = styled.div<CalendarItemWrapperProps>`
  position: relative;
  align-content: center;
  ${NoUserSelect}

  ${({ $hasHolidays, $isDisabled, $isHeaderItem, theme }) => `
    min-width: ${theme.width.calendarItem}px;
    min-height: ${theme.width.calendarItem}px;
    margin: ${theme.size.reset};
    font-size: ${$isHeaderItem ? theme.fontSize.medium : theme.fontSize.reset}px;
    font-weight: ${$isHeaderItem ? theme.fontWeight.bold : theme.fontWeight.semiBold};
    line-height: ${theme.lineHeight.medium}px;
    cursor: ${$isDisabled || $isHeaderItem ? 'default' : 'pointer'};
    border: ${theme.size.small2X}px solid ${$hasHolidays ? theme.colors.bgDaySelected : theme.colors.transparent};
  `}

  background: ${({ $rangeEnd, $rangeInBetween, $rangeStart, $selected, theme }) => {
    if ($rangeStart && $rangeEnd) return theme.colors.bgDaySelected;
    if ($rangeStart) return theme.colors.bgRangeStart;
    if ($rangeEnd) return theme.colors.bgRangeEnd;
    if ($rangeInBetween) return theme.colors.bgRangeInBetween;
    if ($selected) return theme.colors.bgDaySelected;

    return 'transparent';
  }};

  color: ${({ $isDisabled, $rangeEnd, $rangeInBetween, $rangeStart, $selected, theme }) => {
    if ($isDisabled) return theme.colors.disabledDayText;
    if ($rangeInBetween) return theme.colors.rangeInBetweenText;
    if ($selected || $rangeStart || $rangeEnd) return theme.colors.selectedDayText;

    return theme.colors.primaryText;
  }};

  border-radius: ${({ $hasHolidays, $rangeEnd, $rangeInBetween, $rangeStart, $selected, theme }) => {
    if ($rangeStart && $rangeEnd) return `${theme.size.medium3X}px`;
    if ($rangeStart)
      return `${theme.size.medium3X}px ${theme.size.reset}px ${theme.size.reset}px ${theme.size.medium3X}px`;
    if ($rangeEnd)
      return `${theme.size.reset}px ${theme.size.medium3X}px ${theme.size.medium3X}px ${theme.size.reset}px`;
    if ($rangeInBetween) return `${theme.size.reset}px`;
    if ($selected) return `${theme.size.medium3X}px`;
    if ($hasHolidays) return theme.width.half;

    return `${theme.size.reset}px`;
  }};

  &:hover {
    background: ${({ $isDisabled, $isHeaderItem, $rangeEnd, $rangeInBetween, $rangeStart, $selected, theme }) => {
      if ($rangeStart && $rangeEnd) return theme.colors.bgDaySelected;
      if ($rangeStart) return theme.colors.bgRangeStart;
      if ($rangeEnd) return theme.colors.bgRangeEnd;
      if ($rangeInBetween) return theme.colors.bgRangeInBetween;
      if ($isHeaderItem || $isDisabled) return theme.colors.transparent;
      if ($selected) return theme.colors.bgDaySelected;

      return theme.colors.bgButtonOnHover;
    }};
  }

  ${({ $hasTasks, theme }) =>
    $hasTasks &&
    `
    &::after {
      content: '';
      position: absolute;
      bottom: ${theme.size.smallX}px;
      left: ${theme.width.half};
      transform: translateX(-${theme.width.half});
      width:  ${theme.size.medium}px;
      height: ${theme.size.medium}px;
      background-color: ${theme.colors.itemHasTasks};
      border-radius: ${theme.width.half};
    }
  `}
`;

export const Tooltip = styled.div<PopUpProps>`
  ${({ $visible, theme }) => `
    position: absolute;
    text-align: center;
    display: ${$visible ? 'block' : 'none'};
    background-color: ${theme.colors.bgTooltip};
    color: ${theme.colors.selectedDayText};
    padding: ${theme.size.mediumX}px;
    border-radius: ${theme.size.small}px;
    bottom: ${theme.width.tooltipSpacing};
    left: ${theme.width.half};
    transform: translateX(-${theme.width.half});
    z-index: 1;
    white-space: nowrap;
    opacity: 0.9;
    transition: opacity 0.2s ease;
 `}
`;
