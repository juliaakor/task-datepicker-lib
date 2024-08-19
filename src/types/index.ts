export enum View {
  Week = 'week',
  Month = 'month',
  Year = 'year',
}

export interface Holiday {
  id: string;
  startDate: string;
  endDate: string;
  name: string;
}

export interface Task {
  id: string;
  task: string;
  done: boolean;
  date: string;
}
