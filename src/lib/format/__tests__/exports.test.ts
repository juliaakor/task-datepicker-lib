import * as index from '@lib/format';
import { formatDateInput } from '@lib/format/formatDateInput';

describe('lib format folder index file exports', () => {
  it('should export formatDateInput from index', () => {
    expect(index.formatDateInput).toBe(formatDateInput);
  });
});
