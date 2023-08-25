import React from 'react';
import { AppActions } from './types';
import { initialState, themeReducer } from './app.reducer';

interface Context {
  section: string;
  setSection: (section: string) => void;
}

export const AppContext = React.createContext({} as Context);

export const AppProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = React.useReducer(themeReducer, initialState);

  const setSection = (section: string) => {
    return dispatch({ type: AppActions.SET_SECTION, payload: section });
  };

  return (
    <AppContext.Provider value={{ section: state.section, setSection }}>
      {children}
    </AppContext.Provider>
  );
};
