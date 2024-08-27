import { DateTime } from 'luxon';

import { DEFAULT_ITEM } from '@constants/calendar';
import { generateYearView } from '@lib/calendar';

describe('generateYearView', () => {
  it('should generate 11 years centered around the current year', () => {
    const currentYear = 2024;
    const result = generateYearView(currentYear);

    expect(result.length).toBe(11);
    expect(result[0].value).toBe((currentYear - 5).toString());
    expect(result[10].value).toBe((currentYear + 5).toString());
  });

  it('should respect the minDate and not include years earlier than minDate', () => {
    const currentYear = 2024;
    const minDate = DateTime.local(2021, 1, 1);
    const result = generateYearView(currentYear, minDate);

    expect(result[0].value).toBe(minDate.year.toString());
    expect(result).not.toContainEqual(expect.objectContaining({ value: (minDate.year - 1).toString() }));
  });

  it('should respect the maxDate and not include years later than maxDate', () => {
    const currentYear = 2024;
    const maxDate = DateTime.local(2026, 1, 1);
    const result = generateYearView(currentYear, undefined, maxDate);

    expect(result[result.length - 1].value).toBe(maxDate.year.toString());
    expect(result).not.toContainEqual(expect.objectContaining({ value: (maxDate.year + 1).toString() }));
  });

  it('should respect both minDate and maxDate', () => {
    const currentYear = 2024;
    const minDate = DateTime.local(2022, 1, 1);
    const maxDate = DateTime.local(2026, 1, 1);
    const result = generateYearView(currentYear, minDate, maxDate);

    expect(result[0].value).toBe(minDate.year.toString());
    expect(result[result.length - 1].value).toBe(maxDate.year.toString());
    expect(result).not.toContainEqual(expect.objectContaining({ value: (minDate.year - 1).toString() }));
    expect(result).not.toContainEqual(expect.objectContaining({ value: (maxDate.year + 1).toString() }));
  });

  it('should disable years outside of the minDate and maxDate', () => {
    const currentYear = 2024;
    const minDate = DateTime.local(2023, 1, 1);
    const maxDate = DateTime.local(2025, 1, 1);
    const result = generateYearView(currentYear, minDate, maxDate);

    result.forEach((year) => {
      if (year.date.year < minDate.year || year.date.year > maxDate.year) {
        expect(year.isDisabled).toBe(true);
      } else {
        expect(year.isDisabled).toBe(false);
      }
    });
  });

  it('should correctly assign default properties to each year item', () => {
    const currentYear = 2024;
    const result = generateYearView(currentYear);

    result.forEach((year) => {
      expect(year).toMatchObject({
        ...DEFAULT_ITEM,
        key: year.value,
        value: year.value,
      });
    });
  });
});
