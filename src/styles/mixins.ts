import { css } from 'styled-components';

export const NoUserSelect = css`
  -webkit-user-select: none;
  user-select: none;
`;

export const FlexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const FlexCenterSpaceBetween = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const IncludePointer = css`
  cursor: pointer;
`;

export const IconButton = css`
  ${({ theme }) => `
    width: ${theme.width.iconSize}px;
    height: ${theme.width.iconSize}px;

    & svg:hover path {
      fill: ${theme.colors.iconLightColorHover};
    }
  `}
`;

export const SvgIconOnHover = css`
  ${({ theme }) => `
    & svg:hover path {
      fill: ${theme.colors.iconLightColorHover};
    }
  `}
`;
