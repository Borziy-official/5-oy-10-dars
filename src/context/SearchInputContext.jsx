import { createContext, useState } from 'react';

export const SearchInputContext = createContext();

export const SearchInputContextProvider = ({ children }) => {
  const [input, setInput] = useState('');

  return (
    <SearchInputContext.Provider value={{ input, setInput }}>
      {children}
    </SearchInputContext.Provider>
  );
};
