import * as index from '@lib/calendar';
import { generateMonthView } from '@lib/calendar/generateMonthView';
import { generateWeekView } from '@lib/calendar/generateWeekView';
import { generateYearView } from '@lib/calendar/generateYearView';
import { getCurrentDate } from '@lib/calendar/getCurrentDate';
import { getHeaders } from '@lib/calendar/getHeaders';
import { getRangeState } from '@lib/calendar/getRangeState';
import { getYearRange } from '@lib/calendar/getYearRange';

describe('lib calendar folder index file exports', () => {
  it('should export generateMonthView from index', () => {
    expect(index.generateMonthView).toBe(generateMonthView);
  });

  it('should export generateWeekView from index', () => {
    expect(index.generateWeekView).toBe(generateWeekView);
  });

  it('should export generateYearView from index', () => {
    expect(index.generateYearView).toBe(generateYearView);
  });

  it('should export getCurrentDate from index', () => {
    expect(index.getCurrentDate).toBe(getCurrentDate);
  });

  it('should export getYearRange from index', () => {
    expect(index.getYearRange).toBe(getYearRange);
  });

  it('should export getHeaders from index', () => {
    expect(index.getHeaders).toBe(getHeaders);
  });

  it('should export getRangeState from index', () => {
    expect(index.getRangeState).toBe(getRangeState);
  });
});
