import React from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles, defaultTheme } from '@styles/index';
import { Colors, Theme } from '@styles/types';

import { WithCustomThemeProps } from './types';

export const withCustomTheme = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  const WithCustomTheme = (props: P & WithCustomThemeProps) => {
    const { customColors = {}, ...restProps } = props;

    const mergedTheme: Theme = {
      ...defaultTheme,
      colors: { ...defaultTheme.colors, ...customColors } as Colors,
    };

    return (
      <ThemeProvider theme={mergedTheme}>
        <GlobalStyles />
        <WrappedComponent {...(restProps as P)} />
      </ThemeProvider>
    );
  };

  WithCustomTheme.displayName = `WithCustomTheme(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return WithCustomTheme;
};
