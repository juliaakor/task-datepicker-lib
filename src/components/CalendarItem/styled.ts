import styled from 'styled-components';

export const CalendarItemWrapper = styled.div<{
  $disabled?: boolean;
  $selected?: boolean;
  $rangeStart?: boolean;
  $rangeEnd?: boolean;
  $rangeInBetween?: boolean;
  $isDisabled?: boolean;
}>`
  ${({ theme }) => `
    width: ${theme.width.calendarItem}px;
    height: ${theme.width.calendarItem}px;
    margin: ${theme.size.reset};
    align-content: center;
    border: ${theme.colors.primaryBorder};
    font-size: ${theme.fontSize.reset}px;
    font-weight: ${theme.fontWeight.semiBold};
    line-height: ${theme.lineHeight.medium}px;
  `}

  cursor: ${({ $isDisabled }) => {
    if ($isDisabled) return 'default';

    return 'pointer';
  }};

  background: ${({ $rangeEnd, $rangeInBetween, $rangeStart, $selected, theme }) => {
    if ($selected) return theme.colors.bgDaySelected;
    if ($rangeStart) return theme.colors.bgRangeStart;
    if ($rangeEnd) return theme.colors.bgRangeEnd;
    if ($rangeInBetween) return theme.colors.bgRangeInBetween;

    return 'transparent';
  }};

  color: ${({ $isDisabled, $rangeEnd, $rangeInBetween, $rangeStart, $selected, theme }) => {
    if ($isDisabled) return theme.colors.disabledDayText;
    if ($selected || $rangeStart || $rangeEnd) return theme.colors.selectedDayText;
    if ($rangeInBetween) return theme.colors.rangeInBetweenText;

    return theme.colors.primaryText;
  }};

  border-radius: ${({ $rangeEnd, $rangeInBetween, $rangeStart, $selected, theme }) => {
    if ($selected) return `${theme.size.medium3X}px`;
    if ($rangeStart)
      return `${theme.size.medium3X}px ${theme.size.reset}px ${theme.size.reset}px ${theme.size.medium3X}px`;
    if ($rangeEnd)
      return `${theme.size.reset}px ${theme.size.medium3X}px ${theme.size.medium3X}px ${theme.size.reset}px`;
    if ($rangeInBetween) return `${theme.size.reset}px`;

    return `${theme.size.reset}px`;
  }};

  &:hover {
    background: ${({ $rangeEnd, $rangeInBetween, $rangeStart, $selected, theme }) => {
      if ($selected) return theme.colors.bgDaySelected;
      if ($rangeStart) return theme.colors.bgRangeStart;
      if ($rangeEnd) return theme.colors.bgRangeEnd;
      if ($rangeInBetween) return theme.colors.bgRangeInBetween;

      return theme.colors.bgButtonOnHover;
    }};
  }
`;
