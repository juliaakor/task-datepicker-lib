import type { Meta, StoryObj } from '@storybook/react';

import { CalendarWrapper } from '@components/CalendarWrapper';
import { View } from '@type/index';

import { defaultConfig, defaultCustomHolidays, defaultRange } from './defaults';

const meta = {
  component: CalendarWrapper,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'Datepicker/Calendar',
} satisfies Meta<typeof CalendarWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    config: defaultConfig,
    ...defaultRange,
    isOpen: false,
    isWeekStartOnMonday: false,
    label: 'Date',
    showWeekends: true,
  },
};

export const ViewWithCustomHolidays: Story = {
  args: {
    config: {
      ...defaultConfig,
      enableHolidays: true,
    },
    ...defaultRange,
    ...defaultCustomHolidays,
    isOpen: true,
    isWeekStartOnMonday: false,
    label: 'Date',
    showWeekends: true,
    supportedViews: [View.Month, View.Year, View.Week],
  },
};

export const ViewWithoutDefaultHolidays: Story = {
  args: {
    config: {
      ...defaultConfig,
      enableHolidays: true,
    },
    ...defaultRange,
    ...defaultCustomHolidays,
    includeDefaultHolidays: false,
    isOpen: true,
    isWeekStartOnMonday: false,
    label: 'Date',
    showWeekends: true,
    supportedViews: [View.Month, View.Year, View.Week],
  },
};

export const ViewWithTasks: Story = {
  args: {
    config: {
      ...defaultConfig,
      enableTasks: true,
    },
    ...defaultRange,
    isOpen: true,
    isWeekStartOnMonday: false,
    label: 'Date',
    showWeekends: true,
    supportedViews: [View.Month, View.Year, View.Week],
  },
};

export const WithViewToggle: Story = {
  args: {
    config: {
      ...defaultConfig,
      enableViewToggle: true,
    },
    ...defaultRange,
    isOpen: true,
    label: 'Date',
    supportedViews: [View.Month, View.Year, View.Week],
  },
};

export const ViewWeekends: Story = {
  args: {
    config: {
      ...defaultConfig,
      enableWeekends: true,
    },
    ...defaultRange,
    isOpen: true,
    isWeekStartOnMonday: false,
    label: 'Date',
    showWeekends: true,
  },
};

export const ViewWeekStartOnModay: Story = {
  args: {
    config: {
      ...defaultConfig,
      enableWeekends: true,
    },
    ...defaultRange,
    isOpen: true,
    isWeekStartOnMonday: true,
    label: 'Date',
    showWeekends: true,
  },
};

export const ViewNoWeekends: Story = {
  args: {
    config: {
      ...defaultConfig,
      enableWeekends: true,
    },
    ...defaultRange,
    isOpen: true,
    isWeekStartOnMonday: false,
    label: 'Date',
    showWeekends: false,
    supportedViews: [View.Month, View.Year, View.Week],
  },
};
