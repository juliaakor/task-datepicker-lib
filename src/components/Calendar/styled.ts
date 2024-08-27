import styled from 'styled-components';

import { FlexCenter } from '@styles/mixins';

export const CalendarContainter = styled.div`
  position: relative;
`;

export const Container = styled.div`
  position: absolute;
  z-index: 97;

  ${({ theme }) => `
    max-width: ${theme.width.minCalerndar}px;
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
