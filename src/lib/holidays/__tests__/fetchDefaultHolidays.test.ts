import { fetchDefaultHolidays } from '@lib/holidays/fetchDefaultHolidays';

global.fetch = jest.fn();

describe('fetchDefaultHolidays', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch and map holidays correctly', async () => {
    const mockResponse = [
      {
        endDate: '2022-01-02',
        id: '0afb5032-d8d1-40fc-be22-8254413a2145',
        name: [{ language: 'EN', text: 'New Years Day' }],
        nationwide: true,
        startDate: '2022-01-01',
        type: 'Public',
      },
      {
        endDate: '2022-01-07',
        id: '1995862e-33af-47df-bd44-5dcc44bb224f',
        name: [{ language: 'EN', text: 'Christmas (Orthodox Christmas)' }],
        nationwide: true,
        startDate: '2022-01-07',
        type: 'Public',
      },
    ];

    (fetch as jest.Mock).mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockResponse),
    });

    const holidays = await fetchDefaultHolidays('2022-01-01', '2022-12-31');

    const expectedHolidays = [
      {
        endDate: '2022-01-02',
        id: '0afb5032-d8d1-40fc-be22-8254413a2145',
        name: 'New Years Day',
        startDate: '2022-01-01',
      },
      {
        endDate: '2022-01-07',
        id: '1995862e-33af-47df-bd44-5dcc44bb224f',
        name: 'Christmas (Orthodox Christmas)',
        startDate: '2022-01-07',
      },
    ];

    expect(holidays).toEqual(expectedHolidays);
    expect(fetch).toHaveBeenCalledWith(
      'https://openholidaysapi.org/PublicHolidays?countryIsoCode=BY&languageIsoCode=EN&validFrom=2022-01-01&validTo=2022-12-31'
    );
  });

  it('should handle an empty response', async () => {
    (fetch as jest.Mock).mockResolvedValue({
      json: jest.fn().mockResolvedValue([]),
    });

    const holidays = await fetchDefaultHolidays('2022-01-01', '2022-12-31');

    expect(holidays).toEqual([]);
  });

  it('should handle errors correctly', async () => {
    (fetch as jest.Mock).mockRejectedValue(new Error('Network Error'));

    await expect(fetchDefaultHolidays('2022-01-01', '2022-12-31')).rejects.toThrow('Network Error');
  });
});
