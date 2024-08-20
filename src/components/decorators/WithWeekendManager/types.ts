export interface WithWeekendManagerProps {
  showWeekends: boolean;
  isWeekStartOnMonday: boolean;
  toggleWeekends?: () => void;
}

export interface WithWeekendManagerServiceProps {
  isWeekStartOnMonday?: boolean;
  showWeekends?: boolean;
}
