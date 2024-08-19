import styled from 'styled-components';

export const ErrorBoundaryWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme }) => `
    width: ${theme.width.full};
    height: ${theme.width.full};
  `}
`;
