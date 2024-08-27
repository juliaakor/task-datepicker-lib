import type { Meta, StoryObj } from '@storybook/react';

import { RangeCalendar } from '@components/RangeCalendar';
import { getCurrentDate } from '@lib/calendar/getCurrentDate';

const meta = {
  args: {},
  component: RangeCalendar,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'Datepicker/CalendarRange',
} satisfies Meta<typeof RangeCalendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CalendarView: Story = {
  args: {
    isWeekStartOnMonday: false,
    label: 'RangeDate',
    maxDate: getCurrentDate().plus({ years: 1 }),
    minDate: getCurrentDate().minus({ years: 1 }),
    showWeekends: true,
  },
};
