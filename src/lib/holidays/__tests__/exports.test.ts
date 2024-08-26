import * as index from '@lib/holidays';
import { fetchDefaultHolidays } from '@lib/holidays/fetchDefaultHolidays';
import { formatResToHolidays } from '@lib/holidays/formatResToHolidays';
import { mergeHolidays } from '@lib/holidays/mergeHolidays';

describe('lib utils holdays folder index file exports', () => {
  it('should export fetchDefaultHolidays from index', () => {
    expect(index.fetchDefaultHolidays).toBe(fetchDefaultHolidays);
  });

  it('should export formatResToHolidays from index', () => {
    expect(index.formatResToHolidays).toBe(formatResToHolidays);
  });

  it('should export mergeHolidays from index', () => {
    expect(index.mergeHolidays).toBe(mergeHolidays);
  });
});
