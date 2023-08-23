import React from 'react';
import { ThemeActions, ThemeState } from './types';
import { initialState, themeReducer } from './theme.reducer';

interface Context {
  state: ThemeState;
  toggle: () => void;
}

export const ThemeContext = React.createContext({} as Context);

export const ThemeProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = React.useReducer(themeReducer, initialState);

  const toggle = () => {
    return dispatch({ type: ThemeActions.TOGGLE });
  };

  return <ThemeContext.Provider value={{ state, toggle }}>{children}</ThemeContext.Provider>;
};
