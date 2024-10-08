import styled from 'styled-components';

import { FlexCenterSpaceBetween, IncludePointer, SvgIconOnHover } from '@styles/mixins';
import { PopUpProps } from '@type/index';

export const ModalOverlay = styled.div<PopUpProps>`
  position: fixed;
  align-items: center;
  justify-content: center;
  z-index: 98;

  ${({ $visible, theme }) => `
  display: ${$visible ? 'flex' : 'none'};
  top: ${theme.size.reset};
  left: ${theme.size.reset};
  width: ${theme.width.full};
  height: ${theme.width.full};
  `}
`;

export const ModalContainer = styled.div`
  ${({ theme }) => `
    width: ${theme.width.maxModal}px;
    max-width: ${theme.width.full};
    max-height: ${theme.width.maxCalendar}px;
    background:  ${theme.colors.bgModal};
    border-radius: ${theme.size.medium3X}px;
    padding: ${theme.size.large}px;
    border: ${theme.size.smallX}px solid ${theme.colors.primaryBorder};
    box-shadow: ${theme.size.reset} ${theme.size.small}px ${theme.size.mediumX}px ${theme.colors.itemShadow};
  `}

  overflow-y: auto;
`;

export const ModalHeader = styled.div`
  ${FlexCenterSpaceBetween}

  ${({ theme }) => `
  padding-bottom: ${theme.size.smallX}px;
  margin-bottom: ${theme.size.mediumX}px;
  `}
`;

export const Date = styled.p`
  ${({ theme }) => `
    font-size: ${theme.fontSize.medium}px;
    line-height: ${theme.lineHeight.medium}px;
  `}
`;

export const InputContainer = styled.div`
  display: flex;
`;

export const AddButton = styled.button`
  ${({ theme }) => `
    padding: ${theme.size.mediumX}px ${theme.size.largeX}px;
    background-color: ${theme.colors.bgButtonColor};
    color: ${theme.colors.selectedDayText};

    &:hover {
      box-shadow: ${theme.size.reset} ${theme.size.small}px ${theme.size.mediumX}px ${theme.colors.itemShadow};
    }
  `}

  border: none;
`;

export const DeleteButton = styled.button`
  ${({ theme }) => `
    padding: ${theme.size.mediumX}px ${theme.size.largeX}px;

    ${SvgIconOnHover}
  `}

  background: none;
  border: none;
  ${IncludePointer}
`;

export const CloseButton = styled.button`
  ${({ theme }) => `
    padding: ${theme.size.mediumX}px ${theme.size.largeX}px;

    ${SvgIconOnHover}
  `}

  background: none;
  border: none;
  ${IncludePointer}
`;

export const Checkbox = styled.input`
  ${({ theme }) => `
    padding: ${theme.size.mediumX}px ${theme.size.largeX}px;
    margin-right: ${theme.size.smallX}px;
  `}
`;

export const EditButton = styled.button`
  ${({ theme }) => `
    padding: ${theme.size.mediumX}px ${theme.size.largeX}px;
    margin-right: ${theme.size.smallX}px;

    ${SvgIconOnHover}
  `}

  border: none;
  ${IncludePointer}
`;

export const TextAreaField = styled.textarea`
  ${({ theme }) => `
    width: ${theme.width.full};
    padding: ${theme.size.small}px;
    border: ${theme.size.smallX}px solid ${theme.colors.primaryBorder};
    border-radius: ${theme.size.smallX}px;
  `}

  resize: none;
`;

export const TaskItem = styled.li`
  ${({ theme }) => `
    padding: ${theme.size.small}px ${theme.size.reset};
  `}

  ${FlexCenterSpaceBetween}
`;

export const TaskList = styled.ul`
  ${({ theme }) => `
    padding:  ${theme.size.reset};
    margin:  ${theme.size.reset};
  `}

  list-style: none;
`;
