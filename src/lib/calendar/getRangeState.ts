import { DateTime } from 'luxon';

export const getRangeState = (
  enableRange: boolean,
  date: DateTime,
  startRange?: DateTime | null,
  endRange?: DateTime | null
) => {
  if (!enableRange) return {};

  const isStart = startRange && date.equals(startRange);
  const isEnd = endRange && date.equals(endRange);
  const isInRange = startRange && endRange && date >= startRange && date <= endRange;

  return {
    rangeEnd: isEnd,
    rangeInBetween: isInRange && !isStart && !isEnd,
    rangeStart: isStart,
  };
};
