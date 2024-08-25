import { DateTime } from 'luxon';

import { DEFAULT_ITEM } from '@constants/calendar';
import { generateWeekView } from '@lib/calendar';

describe('generateWeekView', () => {
  it('should generate a full week starting on Monday', () => {
    const startDate = DateTime.local(2024, 8, 21);
    const result = generateWeekView(startDate);

    expect(result.length).toBe(7);

    expect(result[0].date.weekday).toBe(1);
    expect(result[6].date.weekday).toBe(7);
  });

  it('should generate a full week starting on Sunday if startOnMonday is false', () => {
    const startDate = DateTime.local(2024, 8, 21);
    const result = generateWeekView(startDate, undefined, undefined, false);

    expect(result.length).toBe(7);

    expect(result[0].date.weekday).toBe(7);
    expect(result[6].date.weekday).toBe(6);
  });

  it('should respect the minDate and disable days before it', () => {
    const startDate = DateTime.local(2024, 8, 21);
    const minDate = DateTime.local(2024, 8, 19);
    const result = generateWeekView(startDate, minDate);

    expect(result[0].isDisabled).toBe(false);
    expect(result[1].isDisabled).toBe(false);
    expect(result[2].isDisabled).toBe(false);
  });

  it('should exclude weekends if showWeekends is false', () => {
    const startDate = DateTime.local(2024, 8, 19);
    const result = generateWeekView(startDate, undefined, undefined, true, false);

    expect(result.length).toBe(5);
    expect(result[0].date.weekday).toBe(1);
    expect(result[4].date.weekday).toBe(5);
  });

  it('should respect the maxDate and disable days after it', () => {
    const startDate = DateTime.local(2024, 8, 21);
    const maxDate = DateTime.local(2024, 8, 23);
    const result = generateWeekView(startDate, undefined, maxDate);

    expect(result.length).toBe(7);
    expect(result[3].isDisabled).toBe(false);
    expect(result[4].isDisabled).toBe(false);
    expect(result[5].isDisabled).toBe(true);
    expect(result[6].isDisabled).toBe(true);
  });

  it('should handle both minDate and maxDate correctly by disabling days outside the range', () => {
    const startDate = DateTime.local(2024, 8, 19);
    const minDate = DateTime.local(2024, 8, 20);
    const maxDate = DateTime.local(2024, 8, 22);
    const result = generateWeekView(startDate, minDate, maxDate);

    expect(result.length).toBe(7);
    expect(result[0].isDisabled).toBe(true);
    expect(result[1].isDisabled).toBe(false);
    expect(result[2].isDisabled).toBe(false);
    expect(result[3].isDisabled).toBe(false);
    expect(result[4].isDisabled).toBe(true);
    expect(result[5].isDisabled).toBe(true);
    expect(result[6].isDisabled).toBe(true);
  });

  it('should correctly assign default properties to each day item', () => {
    const startDate = DateTime.local(2024, 8, 21);
    const result = generateWeekView(startDate);

    result.forEach((day) => {
      expect(day).toMatchObject({
        ...DEFAULT_ITEM,
        key: day.date.toISODate(),
        value: day.date.day,
      });
    });
  });
});
