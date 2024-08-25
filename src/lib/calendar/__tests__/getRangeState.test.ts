import { DateTime } from 'luxon';

import { getRangeState } from '@lib/calendar/getRangeState';

describe('getRangeState', () => {
  const date = DateTime.local(2024, 8, 25);

  test('returns empty object when range is disabled', () => {
    const result = getRangeState(false, date, DateTime.local(2024, 8, 20), DateTime.local(2024, 8, 30));
    expect(result).toEqual({});
  });

  test('returns correct state when date is the start of the range', () => {
    const startRange = DateTime.local(2024, 8, 25);
    const endRange = DateTime.local(2024, 8, 30);
    const result = getRangeState(true, date, startRange, endRange);
    expect(result).toEqual({ rangeEnd: false, rangeInBetween: false, rangeStart: true });
  });

  test('returns correct state when date is the end of the range', () => {
    const startRange = DateTime.local(2024, 8, 20);
    const endRange = DateTime.local(2024, 8, 25);
    const result = getRangeState(true, date, startRange, endRange);
    expect(result).toEqual({ rangeEnd: true, rangeInBetween: false, rangeStart: false });
  });

  test('returns correct state when date is between start and end of the range', () => {
    const startRange = DateTime.local(2024, 8, 20);
    const endRange = DateTime.local(2024, 8, 30);
    const result = getRangeState(true, date, startRange, endRange);
    expect(result).toEqual({ rangeEnd: false, rangeInBetween: true, rangeStart: false });
  });

  test('returns correct state when date is outside the range', () => {
    const startRange = DateTime.local(2024, 8, 20);
    const endRange = DateTime.local(2024, 8, 24);
    const result = getRangeState(true, date, startRange, endRange);
    expect(result).toEqual({ rangeEnd: false, rangeInBetween: false, rangeStart: false });
  });

  test('returns correct state when only startRange is provided and matches the date', () => {
    const startRange = DateTime.local(2024, 8, 25);
    const result = getRangeState(true, date, startRange, null);
    expect(result).toEqual({ rangeEnd: null, rangeInBetween: null, rangeStart: true });
  });

  test('returns correct state when only endRange is provided and matches the date', () => {
    const endRange = DateTime.local(2024, 8, 25);
    const result = getRangeState(true, date, null, endRange);
    expect(result).toEqual({ rangeEnd: true, rangeInBetween: null, rangeStart: null });
  });

  test('returns correct state when both startRange and endRange are null', () => {
    const result = getRangeState(true, date, null, null);
    expect(result).toEqual({ rangeEnd: null, rangeInBetween: null, rangeStart: null });
  });

  test('returns correct state when date is before the startRange', () => {
    const startRange = DateTime.local(2024, 8, 26);
    const endRange = DateTime.local(2024, 8, 30);
    const result = getRangeState(true, date, startRange, endRange);
    expect(result).toEqual({ rangeEnd: false, rangeInBetween: false, rangeStart: false });
  });

  test('returns correct state when date is after the endRange', () => {
    const startRange = DateTime.local(2024, 8, 20);
    const endRange = DateTime.local(2024, 8, 24);
    const result = getRangeState(true, date, startRange, endRange);
    expect(result).toEqual({ rangeEnd: false, rangeInBetween: false, rangeStart: false });
  });
});
