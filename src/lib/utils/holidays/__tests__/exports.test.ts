import * as index from '@lib/utils/holidays';
import { fetchDefaultHolidays } from '@lib/utils/holidays/fetchDefaultHolidays';
import { formatResToHolidays } from '@lib/utils/holidays/formatResToHolidays';
import { mergeHolidays } from '@lib/utils/holidays/mergeHolidays';

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
