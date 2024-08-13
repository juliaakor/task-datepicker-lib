export enum View {
  Week = 'week',
  Month = 'month',
  Year = 'year',
}

export interface Task {
  id: string;
  task: string;
  done: boolean;
  date: string;
}
