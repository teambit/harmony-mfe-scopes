import React, { createContext } from 'react';

export const gqlContext = createContext('');

export type GqlProviderProps = {
  /**
   * react children
   */
  children: React.ReactNode;
  /**
   * api gatway url
   */
  value: string;
};

export const GqlProvider = ({ children, value }: GqlProviderProps) => {
  return <gqlContext.Provider value={value}>{children}</gqlContext.Provider>;
};
