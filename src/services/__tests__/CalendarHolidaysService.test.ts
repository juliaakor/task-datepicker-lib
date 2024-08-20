import { fetchDefaultHolidays } from '@lib/utils/holidays/fetchDefaultHolidays';
import { CalendarHolidaysService } from '@services/index';
import { Holiday } from '@type/index';

jest.mock('@lib/utils/holidays/fetchDefaultHolidays', () => ({
  fetchDefaultHolidays: jest.fn(),
}));

describe('CalendarHolidaysService', () => {
  let service: CalendarHolidaysService;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should initialize with the default holidays', async () => {
    const defaultHolidays: Holiday[] = [
      { endDate: '2024-01-01', id: 'default-1', name: 'New Year', startDate: '2024-01-01' },
    ];

    (fetchDefaultHolidays as jest.Mock).mockResolvedValue(defaultHolidays);

    service = new CalendarHolidaysService(true);
    const holidays = await service.getAllHolidays();

    expect(holidays.length).toBeGreaterThan(0);
    expect(holidays).toEqual(defaultHolidays);
  });

  it('should initialize with no holidays if includeDefaultHolidays is false', async () => {
    service = new CalendarHolidaysService(false);
    const holidays = await service.getAllHolidays();

    expect(holidays.length).toBe(0);
  });

  it('should initialize with custom holidays only when includeDefaultHolidays is false', async () => {
    const customHolidays: Holiday[] = [
      { endDate: '2024-12-25', id: '1', name: 'Custom Christmas', startDate: '2024-12-25' },
    ];
    service = new CalendarHolidaysService(false, customHolidays);
    const holidays = await service.getAllHolidays();

    expect(holidays).toEqual(customHolidays);
  });

  it('should merge default holidays with custom holidays correctly', async () => {
    const customHolidays: Holiday[] = [
      { endDate: '2024-12-25', id: '1', name: 'Custom Christmas', startDate: '2024-12-25' },
    ];
    const defaultHolidays: Holiday[] = [
      { endDate: '2024-01-01', id: 'default-1', name: 'New Year', startDate: '2024-01-01' },
    ];

    (fetchDefaultHolidays as jest.Mock).mockResolvedValue(defaultHolidays);

    service = new CalendarHolidaysService(true, customHolidays);
    const holidays = await service.getAllHolidays();

    expect(holidays.length).toBeGreaterThan(customHolidays.length);
  });

  it('should handle overlapping holidays between default and custom correctly', async () => {
    const customHolidays: Holiday[] = [
      { endDate: '2024-12-25', id: '1', name: 'Custom Christmas', startDate: '2024-12-25' },
      { endDate: '2024-01-02', id: 'default-1', name: 'Overlapping New Year', startDate: '2024-01-01' },
    ];
    const defaultHolidays: Holiday[] = [
      { endDate: '2024-01-01', id: 'default-1', name: 'Default New Year', startDate: '2024-01-01' },
    ];

    (fetchDefaultHolidays as jest.Mock).mockResolvedValue(defaultHolidays);

    service = new CalendarHolidaysService(true, customHolidays);
    const holidays = await service.getAllHolidays();

    expect(holidays.length).toBe(customHolidays.length);
    expect(holidays.filter((h) => h.id === 'default-1').length).toBe(1);
  });

  it('should not modify the holidays list after initialization', async () => {
    service = new CalendarHolidaysService(true);

    const initialHolidays = await service.getAllHolidays();
    initialHolidays.push({ endDate: '2024-12-25', id: '999', name: 'Injected Holiday', startDate: '2024-12-25' });
    const holidaysAfter = await service.getAllHolidays();

    expect(holidaysAfter.length).toBeLessThan(initialHolidays.length);
  });

  it('should handle an empty custom holidays array correctly', async () => {
    service = new CalendarHolidaysService(true, []);
    const holidays = await service.getAllHolidays();

    expect(holidays.length).toBeGreaterThan(0);
  });

  it('should handle custom holidays with the same ID but different dates correctly', async () => {
    const customHolidays: Holiday[] = [
      { endDate: '2024-12-25', id: 'default-1', name: 'Custom Christmas', startDate: '2024-12-25' },
    ];
    const defaultHolidays: Holiday[] = [
      { endDate: '2024-01-01', id: 'default-1', name: 'Default New Year', startDate: '2024-01-01' },
    ];

    (fetchDefaultHolidays as jest.Mock).mockResolvedValue(defaultHolidays);

    service = new CalendarHolidaysService(true, customHolidays);
    const holidays = await service.getAllHolidays();

    expect(holidays.find((holiday) => holiday.id === 'default-1')?.startDate).toBe('2024-12-25');
  });

  it('should ensure no duplicate holidays in the merged list based on ID', async () => {
    const customHolidays: Holiday[] = [
      { endDate: '2024-12-25', id: 'default-1', name: 'Custom Christmas', startDate: '2024-12-25' },
    ];
    const defaultHolidays: Holiday[] = [
      { endDate: '2024-01-01', id: 'default-1', name: 'Default New Year', startDate: '2024-01-01' },
    ];

    (fetchDefaultHolidays as jest.Mock).mockResolvedValue(defaultHolidays);

    service = new CalendarHolidaysService(true, customHolidays);
    const holidays = await service.getAllHolidays();
    const occurrences = holidays.filter((holiday) => holiday.id === 'default-1');

    expect(occurrences.length).toBe(1);
  });

  it('should not include any holidays if both default and custom holidays are empty or turned off', async () => {
    service = new CalendarHolidaysService(false, []);
    const holidays = await service.getAllHolidays();

    expect(holidays.length).toBe(0);
  });

  it('should handle invalid holiday entries (e.g., missing required fields)', async () => {
    const invalidHolidays: Holiday[] = [
      { endDate: '2024-12-25', name: 'Invalid Holiday', startDate: '2024-12-25' } as Holiday,
    ];

    service = new CalendarHolidaysService(true, invalidHolidays);
    const holidays = await service.getAllHolidays();

    expect(holidays.length).toBeGreaterThan(0);
  });

  it('should correctly identify and return holidays that fall within a given date range', async () => {
    const customHolidays: Holiday[] = [
      { endDate: '2024-12-25', id: '1', name: 'Holiday in Range', startDate: '2024-12-24' },
    ];
    service = new CalendarHolidaysService(true, customHolidays);
    const holidays = await service.getHolidaysInRange('2024-12-24', '2024-12-26');

    expect(holidays.length).toBeGreaterThan(0);
    expect(holidays.every((holiday) => holiday.startDate >= '2024-12-24' && holiday.endDate <= '2024-12-26')).toBe(
      true
    );
  });

  it('should correctly handle edge cases for startDate and endDate being the same', async () => {
    const customHolidays: Holiday[] = [
      { endDate: '2024-12-25', id: '1', name: 'One-Day Holiday', startDate: '2024-12-25' },
    ];
    service = new CalendarHolidaysService(true, customHolidays);
    const holidays = await service.getHolidaysInRange('2024-12-25', '2024-12-25');

    expect(holidays.length).toBe(1);
  });

  it('should return an empty list if no holidays fall within the specified date range', async () => {
    const defaultHolidays: Holiday[] = [
      { endDate: '2024-01-01', id: 'default-1', name: 'New Year', startDate: '2024-01-01' },
      { endDate: '2024-12-25', id: 'default-2', name: 'Christmas', startDate: '2024-12-25' },
    ];

    (fetchDefaultHolidays as jest.Mock).mockResolvedValue(defaultHolidays);

    service = new CalendarHolidaysService(true);
    const holidays = await service.getHolidaysInRange('2024-02-01', '2024-02-28');

    expect(holidays.length).toBe(0);
  });

  it('should correctly handle holidays spanning multiple years', async () => {
    const customHolidays: Holiday[] = [
      { endDate: '2025-01-02', id: '1', name: 'Year-End Holiday', startDate: '2024-12-30' },
    ];
    service = new CalendarHolidaysService(true, customHolidays);
    const holidays = await service.getHolidaysInRange('2024-12-31', '2025-01-01');

    expect(holidays.length).toBe(1);
  });

  it('should correctly update holidays when includeDefaultHolidays is switched from true to false', async () => {
    const customHolidays: Holiday[] = [
      { endDate: '2024-12-25', id: '1', name: 'Custom Christmas', startDate: '2024-12-25' },
    ];

    service = new CalendarHolidaysService(true, customHolidays);
    await service.updateDateRange('2024-01-01', '2024-12-31');
    let holidays = await service.getAllHolidays();

    expect(holidays.length).toBeGreaterThan(customHolidays.length);

    service = new CalendarHolidaysService(false, customHolidays);
    await service.updateDateRange('2024-01-01', '2024-12-31');
    holidays = await service.getAllHolidays();

    expect(holidays).toEqual(customHolidays);
  });

  it('should ensure getAllHolidays returns all holidays including custom and default if enabled', async () => {
    const customHolidays: Holiday[] = [
      { endDate: '2024-12-25', id: '1', name: 'Custom Christmas', startDate: '2024-12-25' },
    ];
    const defaultHolidays: Holiday[] = [
      { endDate: '2024-01-01', id: 'default-1', name: 'New Year', startDate: '2024-01-01' },
    ];

    (fetchDefaultHolidays as jest.Mock).mockResolvedValue(defaultHolidays);

    service = new CalendarHolidaysService(true, customHolidays);
    const holidays = await service.getAllHolidays();

    expect(holidays.length).toBe(customHolidays.length + defaultHolidays.length);
  });
});
