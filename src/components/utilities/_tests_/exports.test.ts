import * as index from '@components/utilities';
import { ErrorBoundary } from '@components/utilities/ErrorBoundary';
import { OutsideClickProvider } from '@components/utilities/OutsideClickProvider';
import { PortalProvider, usePortal } from '@components/utilities/PortalProvider';

describe('components folder index file exports', () => {
  it('should export ErrorBoundary from index', () => {
    expect(index.ErrorBoundary).toBe(ErrorBoundary);
  });

  it('should export OutsideClickProvider from index', () => {
    expect(index.OutsideClickProvider).toBe(OutsideClickProvider);
  });

  it('should export PortalProvider from index', () => {
    expect(index.PortalProvider).toBe(PortalProvider);
  });

  it('should export usePortal from index', () => {
    expect(index.usePortal).toBe(usePortal);
  });
});
