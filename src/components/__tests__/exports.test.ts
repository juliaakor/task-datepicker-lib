import { Calendar } from '@components/Calendar';
import * as index from '@components/index';

describe('components folder index file exports', () => {
  it('should export Calendar from index', () => {
    expect(index.Calendar).toBe(Calendar);
  });
});
