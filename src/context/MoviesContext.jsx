import { createContext, useState } from 'react';

export const MoviesContext = createContext();

export const MoviesContextProvider = ({ children }) => {
  const [movies, setMovies] = useState({
    isFatched: false,
    data: [],
    isLoading: false,
    isError: '',
    totalPage: 1,
  });

  return (
    <MoviesContext.Provider value={{ movies, setMovies }}>
      {children}
    </MoviesContext.Provider>
  );
};
