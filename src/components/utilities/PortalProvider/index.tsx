import React, { createContext, useContext, useEffect, useState } from 'react';

import { PortalProviderProps } from './types';

const PortalContext = createContext<HTMLElement | null>(null);

export const PortalProvider = ({ children }: PortalProviderProps) => {
  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const div = document.createElement('div');
    document.body.appendChild(div);
    setPortalRoot(div);

    return () => {
      document.body.removeChild(div);
    };
  }, []);

  return <PortalContext.Provider value={portalRoot}>{portalRoot ? children : null}</PortalContext.Provider>;
};

export const usePortal = () => {
  return useContext(PortalContext);
};
