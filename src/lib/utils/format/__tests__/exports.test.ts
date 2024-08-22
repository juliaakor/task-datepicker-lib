import * as index from '@lib/utils/format';
import { formatDateInput } from '@lib/utils/format/formatDateInput';

describe('lib format folder index file exports', () => {
  it('should export formatDateInput from index', () => {
    expect(index.formatDateInput).toBe(formatDateInput);
  });
});
