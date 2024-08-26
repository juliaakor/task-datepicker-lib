import { Holiday } from '@type/index';

import { formatResToHolidays } from './formatResToHolidays';
import { HolidaysResponse } from './types';

export async function fetchDefaultHolidays(startDate: string, endDate: string): Promise<Holiday[]> {
  const response = await fetch(
    `https://openholidaysapi.org/PublicHolidays?countryIsoCode=BY&languageIsoCode=EN&validFrom=${startDate}&validTo=${endDate}`
  );
  const data: HolidaysResponse[] = await response.json();

  return formatResToHolidays(data);
}
