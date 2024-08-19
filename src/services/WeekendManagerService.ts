export class WeekendManagerService {
  private showWeekends: boolean;

  private isWeekStartOnMonday: boolean;

  constructor(showWeekends = true, isWeekStartOnMonday = true) {
    this.showWeekends = showWeekends;
    this.isWeekStartOnMonday = isWeekStartOnMonday;
  }

  public toggleWeekendsVisibility() {
    this.showWeekends = !this.showWeekends;
  }

  public getWeekendsVisibility() {
    return this.showWeekends;
  }

  public getIsWeekStartOnMonday() {
    return this.isWeekStartOnMonday;
  }
}
