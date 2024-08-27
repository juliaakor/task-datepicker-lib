import styled, { css } from 'styled-components';

import { IncludePointer, IconButton } from '@styles/mixins';
import { InputItemProps } from '@type/index';

export const InputWrapper = styled.div`
  position: relative;
`;

export const Label = styled.div`
  ${({ theme }) => `
    font-weight: ${theme.fontWeight.semiBold};
    font-size: ${theme.fontSize.large}px;
    line-height: ${theme.lineHeight.large}px;

    margin-bottom: ${theme.size.medium3X}px;
    width: ${theme.width.full};
  `}
`;

export const InputItem = styled.input<InputItemProps>`
  ${({ $isError, theme }) => `
    min-width: ${theme.width.minCalerndar}px;
    border: ${`${theme.size.smallX}px solid ${theme.colors.primaryBorder}`};
    border-radius: ${theme.size.medium3X}px;
    padding: ${`${theme.size.largeX}px ${theme.size.large3X * 2.5}px`};
    font-weight: ${theme.fontWeight.regular};
    font-size: ${theme.fontSize.large}px;
    line-height: ${theme.lineHeight.large}px;
    letter-spacing: ${theme.size.smallX}px;

    box-shadow: ${`${theme.size.medium3X}px ${theme.size.medium3X}px ${theme.size.medium}px -${theme.size.medium3X}px
    ${$isError ? theme.colors.errorBorder : theme.colors.transparent}`};

    &:focus {
      box-shadow: ${`${theme.size.medium3X}px ${theme.size.medium3X}px ${theme.size.medium}px -${theme.size.medium3X}px
      ${$isError ? theme.colors.errorBorder : theme.colors.primaryBorder}`};
    }
  `}
`;

const CalendarButton = css`
  position: absolute;
  ${IconButton}
  ${IncludePointer}

  ${({ theme }) => `
    top: ${theme.width.half};
    transform: translateY(-${theme.width.half});
  `}
`;

export const CalendarButtonWrapper = styled.span`
  ${CalendarButton}
  left: ${({ theme }) => theme.size.large3X}px;
`;

export const ClearButtonWrapper = styled.span`
  ${CalendarButton}
  right: ${({ theme }) => theme.size.large3X}px;
`;
