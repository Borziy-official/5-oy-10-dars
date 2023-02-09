import { createContext, useState } from 'react';

export const PaginationContext = createContext();

export const PaginationContextProvider = ({ children }) => {
  const [activePage, setActivePage] = useState(1);

  return (
    <PaginationContext.Provider value={{ activePage, setActivePage }}>
      {children}
    </PaginationContext.Provider>
  );
};
