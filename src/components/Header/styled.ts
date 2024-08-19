import styled from 'styled-components';

export const HeaderContainer = styled.div`
  min-width: ${({ theme }) => theme.width.full};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.size.large}px;
  font-size: ${({ theme }) => theme.fontSize.medium}px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
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
