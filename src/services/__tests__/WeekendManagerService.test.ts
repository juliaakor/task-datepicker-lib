import { WeekendManagerService } from '@services/WeekendManagerService';

describe('WeekendManagerService', () => {
  it('should initialize with default values', () => {
    const service = new WeekendManagerService();

    expect(service.getWeekendsVisibility()).toBe(true);
    expect(service.getIsWeekStartOnMonday()).toBe(true);
  });

  it('should initialize with custom values', () => {
    const service = new WeekendManagerService(false, false);

    expect(service.getWeekendsVisibility()).toBe(false);
    expect(service.getIsWeekStartOnMonday()).toBe(false);
  });

  it('should toggle weekends visibility', () => {
    const service = new WeekendManagerService();
    expect(service.getWeekendsVisibility()).toBe(true);

    service.toggleWeekendsVisibility();
    expect(service.getWeekendsVisibility()).toBe(false);

    service.toggleWeekendsVisibility();
    expect(service.getWeekendsVisibility()).toBe(true);
  });

  it('should return the correct value for isWeekStartOnMonday', () => {
    const service1 = new WeekendManagerService(true, true);
    expect(service1.getIsWeekStartOnMonday()).toBe(true);

    const service2 = new WeekendManagerService(true, false);
    expect(service2.getIsWeekStartOnMonday()).toBe(false);
  });
});
