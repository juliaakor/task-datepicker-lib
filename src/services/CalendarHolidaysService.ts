import { getYearRange } from '@lib/calendar';
import { fetchDefaultHolidays, mergeHolidays } from '@lib/holidays';
import { Holiday } from '@type/index';

const thisYearRange = getYearRange();

export class CalendarHolidaysService {
  private holidays: Holiday[] = [];

  private customHolidays: Holiday[] = [];

  private defaultHolidays: Holiday[] = [];

  private startDate: string;

  private endDate: string;

  private includeDefaultHolidays: boolean;

  constructor(includeDefaultHolidays = true, customHolidays: Holiday[] = []) {
    this.includeDefaultHolidays = includeDefaultHolidays;
    this.customHolidays = customHolidays;
    this.startDate = thisYearRange.startDate;
    this.endDate = thisYearRange.endDate;

    this.initializeHolidays();
  }

  private async initializeHolidays() {
    if (this.includeDefaultHolidays) {
      await this.fetchAndMergeHolidays();

      return;
    }

    this.holidays = [...this.customHolidays];
  }

  private async fetchAndMergeHolidays() {
    this.defaultHolidays = await fetchDefaultHolidays(this.startDate, this.endDate);
    this.holidays = mergeHolidays(this.defaultHolidays, this.customHolidays);
  }

  public async updateDateRange(startDate: string, endDate: string) {
    this.startDate = startDate;
    this.endDate = endDate;

    if (this.includeDefaultHolidays) {
      await this.fetchAndMergeHolidays();

      return;
    }

    this.holidays = [...this.customHolidays];
  }

  public async getAllHolidays(): Promise<Holiday[]> {
    if (this.includeDefaultHolidays && this.defaultHolidays.length === 0) {
      await this.fetchAndMergeHolidays();
    }

    return [...this.holidays];
  }

  public async getHolidaysInRange(startDate: string, endDate: string): Promise<Holiday[]> {
    const allHolidays = await this.getAllHolidays();

    return allHolidays.filter((holiday) => holiday.startDate <= endDate && holiday.endDate >= startDate);
  }

  public async getCustomHolidays(): Promise<Holiday[]> {
    return [...this.customHolidays];
  }
}
