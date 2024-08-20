import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { withCustomTheme } from '@components/decorators';
import { Calendar } from '@components/index';

const meta = {
  args: {},
  argTypes: {},
  component: Calendar,
  decorators: [
    (Story) => {
      const WrappedStory = withCustomTheme(Story);

      return <WrappedStory />;
    },
  ],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Datepicker/Calendar',
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CalendarView: Story = {
  args: {},
};
