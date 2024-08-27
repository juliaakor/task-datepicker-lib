import styled from 'styled-components';

import { FlexCenter } from '@styles/mixins';

export const ErrorBoundaryWrapper = styled.div`
  ${FlexCenter}

  ${({ theme }) => `
    width: ${theme.width.full};
    height: ${theme.width.full};
  `}
`;
