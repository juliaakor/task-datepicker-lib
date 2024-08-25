import { formatDateInput } from '@lib/format';

describe('formatDateInput', () => {
  it('should format "202308" to "2023-08"', () => {
    expect(formatDateInput('202308')).toBe('2023-08');
  });

  it('should format "2023" to "2023"', () => {
    expect(formatDateInput('2023')).toBe('2023');
  });

  it('should format "20230815" to "2023-08-15"', () => {
    expect(formatDateInput('20230815')).toBe('2023-08-15');
  });

  it('should format "2023081512" to "2023-08-15"', () => {
    expect(formatDateInput('2023081512')).toBe('2023-08-15');
  });

  it('should handle input with non-digit characters', () => {
    expect(formatDateInput('2023-08-15')).toBe('2023-08-15');
    expect(formatDateInput('2023/08/15')).toBe('2023-08-15');
    expect(formatDateInput('2023.08.15')).toBe('2023-08-15');
  });

  it('should handle empty input', () => {
    expect(formatDateInput('')).toBe('');
  });

  it('should handle input longer than required', () => {
    expect(formatDateInput('202308151234')).toBe('2023-08-15');
  });

  it('should handle input with partial date', () => {
    expect(formatDateInput('2023-08')).toBe('2023-08');
    expect(formatDateInput('2023-08-15')).toBe('2023-08-15');
  });
});
