import React, { useState } from 'react';

import { TaskTextContainer, TaskTextContent, Tooltip } from './styled';
import { TaskContentProps } from './types';

export const TaskContent = ({ text }: TaskContentProps) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <TaskTextContainer onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <TaskTextContent>{text}</TaskTextContent>
      {showTooltip && <Tooltip>{text}</Tooltip>}
    </TaskTextContainer>
  );
};
