import styled from 'styled-components';

export const HeaderContainer = styled.div`
  ${({ theme }) => `
    min-width: ${theme.width.full};
    padding: ${theme.size.large}px;
    font-size: ${theme.fontSize.medium}px;
    font-weight: ${theme.fontWeight.bold};
  `}

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DateTitle = styled.span`
  cursor: pointer;
`;

export const IconButton = styled.span`
  cursor: pointer;

  & svg:hover path {
    fill: ${({ theme }) => theme.colors.iconDarkColorHover};
  }
`;
