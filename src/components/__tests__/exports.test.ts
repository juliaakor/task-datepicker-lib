import { CalendarItem } from '@components/CalendarItem';
import { Header } from '@components/Header';
import * as index from '@components/index';
import { Input } from '@components/Input';
import { Modal } from '@components/Modal';
import { TaskContent } from '@components/TaskContent';

describe('components folder index file exports', () => {
  it('should export CalendarItem from index', () => {
    expect(index.CalendarItem).toBe(CalendarItem);
  });

  it('should export Header from index', () => {
    expect(index.Header).toBe(Header);
  });

  it('should export Input from index', () => {
    expect(index.Input).toBe(Input);
  });

  it('should export Modal from index', () => {
    expect(index.Modal).toBe(Modal);
  });

  it('should export TaskContent from index', () => {
    expect(index.TaskContent).toBe(TaskContent);
  });
});
