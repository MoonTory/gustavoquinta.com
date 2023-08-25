import React from 'react';

interface Context {
  section: string;
  setSection: React.Dispatch<React.SetStateAction<string>>;
}

export const AppContext = React.createContext({} as Context);

export const AppProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [section, setSection] = React.useState('work');

  return (
    <AppContext.Provider value={{ section: section, setSection }}>
      {children}
    </AppContext.Provider>
  );
};
