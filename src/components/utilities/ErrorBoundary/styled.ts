import styled from 'styled-components';

import { FlexCenter } from '@styles/mixins';

export const ErrorBoundaryWrapper = styled.div`
  ${FlexCenter}

  ${({ theme }) => `
    padding: ${theme.size.large}px;
    font-size: ${theme.fontSize.medium}px;
    color: ${theme.colors.disabledDayText};
    width: ${theme.width.full};
    height: ${theme.width.full};
  `}
`;
