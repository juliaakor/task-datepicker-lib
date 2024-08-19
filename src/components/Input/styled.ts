import styled, { css } from 'styled-components';

export const InputWrapper = styled.div`
  position: relative;
`;

export const Label = styled.div`
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  font-size: ${({ theme }) => theme.fontSize.large}px;
  line-height: ${({ theme }) => theme.lineHeight.large}px;

  margin-bottom: ${({ theme }) => theme.size.medium3X}px;
  width: ${({ theme }) => theme.width.full};
`;

export const InputItem = styled.input<{ $isError: boolean }>`
  min-width: ${({ theme }) => theme.width.minCalerndar}px;
  border: ${({ theme }) => `${theme.size.smallX}px solid ${theme.colors.primaryBorder}`};
  border-radius: ${({ theme }) => theme.size.medium3X}px;
  box-shadow: ${({ $isError, theme }) =>
    `${theme.size.medium3X}px ${theme.size.medium3X}px ${theme.size.medium}px -${theme.size.medium3X}px
    ${$isError ? theme.colors.errorBorder : theme.colors.transparent}`};
  padding: ${({ theme }) => `${theme.size.largeX}px ${theme.size.large3X * 2.5}px`};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: ${({ theme }) => theme.fontSize.large}px;
  line-height: ${({ theme }) => theme.lineHeight.large}px;
  letter-spacing: ${({ theme }) => theme.size.smallX}px;

  &:focus {
    box-shadow: ${({ $isError, theme }) =>
      `${theme.size.medium3X}px ${theme.size.medium3X}px ${theme.size.medium}px -${theme.size.medium3X}px
      ${$isError ? theme.colors.errorBorder : theme.colors.primaryBorder}`};
  }
`;

const CalendarButton = css`
  position: absolute;
  top: ${({ theme }) => theme.width.half};
  transform: translateY(-${({ theme }) => theme.width.half});
  cursor: pointer;
  width: ${({ theme }) => theme.width.iconSize}px;
  height: ${({ theme }) => theme.width.iconSize}px;

  & svg:hover path {
    fill: ${({ theme }) => theme.colors.iconLightColorHover};
  }
`;

export const CalendarButtonWrapper = styled.span`
  ${CalendarButton}
  left: ${({ theme }) => theme.size.large3X}px;
`;

export const ClearButtonWrapper = styled.span`
  ${CalendarButton}
  right: ${({ theme }) => theme.size.large3X}px;
`;
