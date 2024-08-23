import styled from 'styled-components';

export const TaskTextContainer = styled.div`
  ${({ theme }) => `
    max-width: ${theme.width.tooltip}px;
  `}

  position: relative;
  cursor: pointer;
`;

export const TaskTextContent = styled.span`
  display: block;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
`;

export const Tooltip = styled.div`
  ${({ theme }) => `
    background-color: ${theme.colors.bgTooltip};
    color: ${theme.colors.selectedDayText};
    padding: ${theme.size.medium}px;
    border-radius: ${theme.size.small}px;
    bottom: ${theme.width.full};
    left: ${theme.width.half};
    transform: translateX(-${theme.width.half});
    width: ${theme.width.tooltip}px;
    max-height: ${theme.width.maxTooltip}px;
  `}

  position: absolute;
  text-align: center;
  overflow-y: auto;
  overflow-x: auto;
  z-index: 99;
  opacity: 0.9;
  transition: opacity 0.2s ease;
`;
