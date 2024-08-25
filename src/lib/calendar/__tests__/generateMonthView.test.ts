import { DateTime } from 'luxon';

import { DEFAULT_ITEM } from '@constants/calendar';
import { generateMonthView } from '@lib/calendar';

describe('generateMonthView', () => {
  it('should generate a full month view including days from previous and next months', () => {
    const result = generateMonthView(2024, 8);

    expect(result.length).toBe(35);
    expect(result[0].date.month).toBe(7);
    expect(result[10].date.month).toBe(8);
    expect(result[34].date.month).toBe(9);
  });

  it('should disable days before minDate and after maxDate', () => {
    const minDate = DateTime.local(2024, 8, 10);
    const maxDate = DateTime.local(2024, 8, 20);
    const result = generateMonthView(2024, 8, minDate, maxDate);

    expect(result.every((day) => (day.date < minDate ? day.isDisabled : true))).toBe(true);
    expect(result.every((day) => (day.date > maxDate ? day.isDisabled : true))).toBe(true);
    expect(result.some((day) => day.date.equals(minDate))).toBe(true);
    expect(result.some((day) => day.date.equals(maxDate))).toBe(true);
  });

  it('should handle the startOnMonday flag correctly', () => {
    const result = generateMonthView(2024, 8, undefined, undefined, false);

    expect(result[0].date.weekday).toBe(7);
  });

  it('should exclude weekends when showWeekends is false', () => {
    const result = generateMonthView(2024, 8, undefined, undefined, true, false);

    expect(result.length).toBeLessThan(35);
    expect(result.every((day) => day.date.weekday !== 6 && day.date.weekday !== 7)).toBe(true);
  });

  it('should handle both minDate and maxDate correctly by disabling days outside the range', () => {
    const minDate = DateTime.local(2024, 8, 10);
    const maxDate = DateTime.local(2024, 8, 20);
    const result = generateMonthView(2024, 8, minDate, maxDate);

    expect(result.length).toBe(35);
    expect(result.find((day) => day.date.equals(minDate))?.isDisabled).toBe(false);
    expect(result.find((day) => day.date.equals(maxDate))?.isDisabled).toBe(false);
    expect(result.find((day) => day.date < minDate)?.isDisabled).toBe(true);
    expect(result.find((day) => day.date > maxDate)?.isDisabled).toBe(true);
  });

  it('should return objects with the correct shape and values', () => {
    const date = DateTime.local();
    const result = generateMonthView(date.year, date.month);

    result.forEach((day) => {
      expect(day).toHaveProperty('date');
      expect(day).toHaveProperty('isDisabled');
      expect(day).toHaveProperty('key');
      expect(day).toHaveProperty('value');
      expect(day).toMatchObject(DEFAULT_ITEM);
    });
  });
});
