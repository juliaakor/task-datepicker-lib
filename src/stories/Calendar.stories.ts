import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Calendar } from '@components/index';

const meta = {
  args: { onClick: fn() },
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  component: Calendar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Datepicker/Calendar',
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CalendarView: Story = {
  args: {
    label: 'Calendar',
  },
};
