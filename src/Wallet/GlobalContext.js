import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [total, setTotal] = React.useState(0);

  return (
    <GlobalContext.Provider value={{ total, setTotal }}>
      {children}
    </GlobalContext.Provider>
  );
};
