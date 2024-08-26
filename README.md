# task-datepicker-lib

## Installation

### Prerequisites

Ensure you have the following dependencies installed in your project:

- React 18.0.0 or higher
- React DOM 18.0.0 or higher
- Styled Components 6.0.0 or higher

### Installation Command

To install the `task-datepicker-lib` package, run the following command:

```bash
yarn add task-datepicker-lib
```

### Peer Dependencies

Ensure that you have the following peer dependencies in your project:

```json
{
  "react": "^18.0.0",
  "react-dom": "^18.0.0",
  "styled-components": "^6.0.0"
}
```

## Usage

### Basic Calendar

To use the basic calendar component, import the CalendarWrapper from the library and include it in your component:

```js
import React from 'react';
import { Calendar } from 'task-datepicker-lib';

export const defaultConfig = {
  enableHolidays: false,
  enableTasks: false,
  enableViewToggle: false,
  enableWeekends: false,
};

export const defaultRange = {
  maxDate: {DateTime object},
  minDate: {DateTime object},
};

export const MyCalendarComponent = () => (
  <Calendar
    config={defaultConfig}
    {...defaultRange}
    isOpen={false}
    isWeekStartOnMonday={false}
    label="Date"
    showWeekends={true}
  />
);
```

or

```js
import React from 'react';
import { Calendar } from 'task-datepicker-lib';

export const defaultConfig = {
  enableHolidays: false,
  enableTasks: false,
  enableViewToggle: false,
  enableWeekends: false,
};

export const defaultRange = {
  maxDate: {DateTime object},
  minDate: {DateTime object},
};

export const defaultCustomHolidays = {
  customHolidays: [
    {
      endDate: '2024-08-22',
      id: '12345',
      name: 'Random Holiday',
      startDate: '2024-08-22',
    },
    {
      endDate: '2024-08-22',
      id: '1234',
      name: 'Random Holiday 2',
      startDate: '2024-08-22',
    },
  ],
};

export  const CustomHolidayExample = () => (
  <Calendar
    config={{
      ...defaultConfig,
      enableHolidays: true,
    }}
    {...defaultRange}
    {...defaultCustomHolidays}
    isOpen={true}
    isWeekStartOnMonday={false}
    label="Date"
    showWeekends={true}
    supportedViews={[View.Month, View.Year, View.Week]}
  />
);
```

### Range Calendar

For selecting a range of dates, use the RangeCalendar component:

```js
import React from 'react';
import { RangeCalendar } from 'task-datepicker-lib';

export const MyRangeCalendarComponent = () => (
  <RangeCalendar
    isOpen={true}
    minDate={DateTime.local(2024, 1, 1)}
    maxDate={DateTime.local(2024, 12, 31)}
    isWeekStartOnMonday={false}
    label="RangeDate"
    showWeekends={true}
  />
);
```

## Component Overview

### Props

- config: An object to configure the calendar's behavior.
- enableHolidays: Boolean to enable/disable holidays.
- enableTasks: Boolean to enable/disable tasks.
- enableViewToggle: Boolean to enable/disable view toggle functionality.
- enableWeekends: Boolean to include/exclude weekends.
- isOpen: Boolean to control whether the calendar is open or closed.
- isWeekStartOnMonday: Boolean to control if the week starts on Monday.
- label: A string for the calendar's label.
- showWeekends: Boolean to show or hide weekends.
- supportedViews: Array of views that are supported (e.g., View.Month, View.Year, View.Week).

### Config

Pass the following config to turn on or off the features of the calendar:

```json
const config = {
  enableHolidays: true,
  enableTasks: true,
  enableViewToggle: true,
  enableWeekends: false,
};
```

## Types

The package exports the following types:

- Holiday: Type representing a holiday.
- Task: Type representing a task.
- View: Enum representing different calendar views (Month, Year, Week).
- Colors: Type representing color configurations.
- Theme: Type representing theme configurations.

## For contributors

### Getting Started

After cloning the repo, consult `package.json` for the requirements with regard to nodejs and yarn versions.
Install dependencies with:

```bash
yarn
yarn prepare
```

Create a .env file:

```bash
touch .env.local
```

Add environment variables to this file. An example of the required environment variables can be found in the .env.draft file

Run the development build with:

```bash
yarn dev
```

Run storybook development:

```bash
yarn storybook
```

Open http://localhost:6006 with your browser to see the result.

For the full list of available scripts (`yarn lint`, `yarn test`, `yarn build`, etc.), please consult `scripts` section of `package.json` or `scripts` section of the documentation for additional decription.

### Scripts

Run the scripts using:

```bash
yarn <script_name>
```

At the moment, the following scripts can be run within the project:

- build - create an optimised production build of the lib;
- dev - create an optimised production build and launch the lib in watch mode;
- storybook - starts Storybook in development mode on port 6006;
- build-storybook - builds Storybook for production;
- clean - delete the build folder and all its files using rm;
- clean:npm - delete the node_modules folder and all its files with rm;
- lint - check for all the existing eslint errors and warnings in the files;
- lint:fix - fix all eslint errors and warnings available for fixing;
- prettier - check for all code style issues in files;
- prettier:fix - fix all the code style issues in files;
- prepare - to setup husky hooks;
- chromatic - to run new build and publish storybook to chromatic;
- test - run tests and watch files for changes to rerun tests related to changed files;
- test:all - run tests and watch files for changes to rerun all tests when something changes;
- test:ci - running tests in a ci environment;
- test:coverage - delete the coverage folder and open a new coverage report after the tests have been executed;

**Note**: The following commands use the `.gitignore` file instead of their own ignore file: `lint`, `lint:fix`, `prettier`, `prettier:fix`.
