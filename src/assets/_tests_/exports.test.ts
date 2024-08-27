import { CalendarIcon } from '@assets/calendarIcon';
import { ClearIcon } from '@assets/clearIcon';
import { DeleteIcon } from '@assets/deleteIcon';
import { EditIcon } from '@assets/editIcon';
import * as index from '@assets/index';
import { NextIcon } from '@assets/nextIcon';
import { PrevIcon } from '@assets/prevIcon';

describe('components folder index file exports', () => {
  it('should export CalendarIcon from index', () => {
    expect(index.CalendarIcon).toBe(CalendarIcon);
  });

  it('should export ClearIcon from index', () => {
    expect(index.ClearIcon).toBe(ClearIcon);
  });

  it('should export NextIcon from index', () => {
    expect(index.NextIcon).toBe(NextIcon);
  });

  it('should export PrevIcon from index', () => {
    expect(index.PrevIcon).toBe(PrevIcon);
  });

  it('should export DeleteIcon from index', () => {
    expect(index.DeleteIcon).toBe(DeleteIcon);
  });

  it('should export EditIcon from index', () => {
    expect(index.EditIcon).toBe(EditIcon);
  });
});
