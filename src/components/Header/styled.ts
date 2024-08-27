import styled from 'styled-components';

import { FlexCenterSpaceBetween, IncludePointer, NoUserSelect } from '@styles/mixins';

export const HeaderContainer = styled.div`
  ${({ theme }) => `
    min-width: ${theme.width.full};
    padding: ${theme.size.large}px;
    font-size: ${theme.fontSize.medium}px;
    font-weight: ${theme.fontWeight.bold};
  `}

  ${NoUserSelect}
  ${FlexCenterSpaceBetween}
`;

export const DateTitle = styled.span`
  ${IncludePointer}
`;

export const IconButton = styled.span`
  ${IncludePointer}

  & svg:hover path {
    fill: ${({ theme }) => theme.colors.iconDarkColorHover};
  }
`;
