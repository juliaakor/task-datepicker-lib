import { DateRange } from './types';

export const getYearRange = (): DateRange => {
  const currentYear = new Date().getFullYear();

  const startDate = `${currentYear}-01-01`;
  const endDate = `${currentYear}-12-31`;

  return { endDate, startDate };
};
