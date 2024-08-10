import { View } from '@type/index';

export class CalendarViewService {
  private availableViews: Set<View>;

  private currentView: View;

  constructor(views: View[]) {
    const [firstView, ...restViews] = views;
    this.availableViews = new Set([firstView, ...restViews]);
    this.currentView = firstView;
  }

  setView(view: View) {
    if (this.availableViews.has(view)) {
      this.currentView = view;

      return;
    }

    throw new Error(`View type "${view}" is not supported.`);
  }

  getView() {
    return this.currentView;
  }

  getAvailableViews() {
    return Array.from(this.availableViews);
  }
}
