import React, { Component, ErrorInfo } from 'react';

import { ErrorBoundaryWrapper } from './styles';
import { ErrorBoundaryProps, ErrorState } from './types';

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // console error used instead of logger func
    // eslint-disable-next-line no-console
    console.error('ErrorBoundary caught an error: ', error, errorInfo);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <ErrorBoundaryWrapper>Something went wrong here... Try to reload or contact the support.</ErrorBoundaryWrapper>
      );
    }

    return children;
  }
}
