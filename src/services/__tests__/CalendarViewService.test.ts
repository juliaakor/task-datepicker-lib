import { CalendarViewService } from '@services/index';
import { View } from '@type/index';

describe('CalendarViewService', () => {
  it('should initialize with the first view and handle view changes correctly', () => {
    const service = new CalendarViewService([View.Month, View.Year]);

    expect(service.getView()).toBe(View.Month);
    expect(service.getAvailableViews()).toEqual([View.Month, View.Year]);

    service.setView(View.Year);
    expect(service.getView()).toBe(View.Year);

    expect(() => {
      service.setView(View.Week);
    }).toThrow('View type "week" is not supported.');
  });

  it('should throw an error when setting an unsupported view', () => {
    const service = new CalendarViewService([View.Month]);

    expect(() => {
      service.setView(View.Year);
    }).toThrow('View type "year" is not supported.');
  });

  it('should initialize correctly with no views', () => {
    const service = new CalendarViewService([]);

    expect(service.getView()).toBeUndefined();
    expect(service.getAvailableViews()).toEqual([]);
  });

  it('should initialize correctly with duplicate views', () => {
    const service = new CalendarViewService([View.Month, View.Month, View.Year]);

    expect(service.getView()).toBe(View.Month);
    expect(service.getAvailableViews()).toEqual([View.Month, View.Year]);
  });

  it('should not change view when setting the same view', () => {
    const service = new CalendarViewService([View.Month, View.Year]);

    service.setView(View.Month);
    expect(service.getView()).toBe(View.Month);

    service.setView(View.Month);
    expect(service.getView()).toBe(View.Month);
  });

  it('should handle setting a view when only one view is available', () => {
    const service = new CalendarViewService([View.Month]);

    expect(() => {
      service.setView(View.Year);
    }).toThrow('View type "year" is not supported.');
    expect(service.getView()).toBe(View.Month);
  });

  it('should handle changing view to an available one', () => {
    const service = new CalendarViewService([View.Month, View.Year]);

    service.setView(View.Year);
    expect(service.getView()).toBe(View.Year);

    service.setView(View.Month);
    expect(service.getView()).toBe(View.Month);
  });

  it('should return views in the order they were provided', () => {
    const service = new CalendarViewService([View.Year, View.Month, View.Week]);
    expect(service.getAvailableViews()).toEqual([View.Year, View.Month, View.Week]);
  });
});
