import axios from 'axios';
import React, { useEffect } from 'react';
import { MovieCard } from '../../components/MovieCard/MovieCard';
import { useContext } from 'react';
import { SearchInputContext } from '../../context/SearchInputContext';
import { MoviesContext } from '../../context/MoviesContext';
import { PaginationContext } from '../../context/PaginationContext';
import { Pagination } from '@mui/material';

export const SearchMovie = () => {
  const { input } = useContext(SearchInputContext);

  const { movies, setMovies } = useContext(MoviesContext);

  const { activePage, setActivePage } = useContext(PaginationContext);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=403a3d79b473e2d82068b4a67b4aba14&query=${input}&page=${activePage}`
      )
      .then((data) =>
        setMovies({
          isError: false,
          isLoading: false,
          data: data.data.results,
          isFetched: true,
          totalPage: data.data.total_pages,
        })
      )
      .catch((err) =>
        setMovies({
          isFetched: true,
          isLoading: false,
          isError: err.message,
          data: [],
        })
      );
  }, [activePage]);

  return (
    <div className="container my-3">
      {movies.data.length ? (
        <>
          <ul className="list-unstyled d-flex justify-content-center justify-content-lg-between flex-wrap gap-4">
            {movies.data.map((item) => (
              <li key={item.id} className="h-auto">
                <MovieCard obj={item} />
              </li>
            ))}
          </ul>
          <div className="d-flex justify-content-center my-4">
            <Pagination
              count={movies.totalPage}
              color="primary"
              onChange={(_, num) => setActivePage(num)}
            />
          </div>
        </>
      ) : (
        <h2 className="text-center display-2 fw-semibold text-success my-3">
          Loading...
        </h2>
      )}
    </div>
  );
};
