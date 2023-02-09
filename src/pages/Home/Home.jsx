import { MovieCard } from '../../components/MovieCard/MovieCard';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Pagination } from '@mui/material';
import { useContext } from 'react';
import { MoviesContext } from '../../context/MoviesContext';
import { PaginationContext } from '../../context/PaginationContext';

export const Home = () => {
  const { movies, setMovies } = useContext(MoviesContext);

  const { activePage, setActivePage } = useContext(PaginationContext);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=403a3d79b473e2d82068b4a67b4aba14&page=${activePage}`
      )
      .then((data) =>
        setMovies({
          isFetched: true,
          isLoading: false,
          data: data.data.results,
          isError: false,
          totalPage: data.data.total_pages,
        })
      )
      .catch((err) =>
        setMovies({
          isFetched: true,
          isError: err.message,
          isLoading: false,
          data: [],
        })
      );
  }, [activePage]);

  return (
    <div className="container my-4">
      {movies.isError ? (
        <h2 className="text-center h2 text-danger">{movies.isError}</h2>
      ) : (
        ''
      )}
      {movies.isLoading ? (
        <h2 className="text-center h2 text-success">Loading...</h2>
      ) : (
        ''
      )}
      {movies.data.length ? (
        <>
          <ul className="d-flex justify-content-center justify-content-lg-between flex-wrap gap-4 list-unstyled">
            {movies.data.map((item) => (
              <li className="h-auto" key={item.id}>
                <MovieCard obj={item} />
              </li>
            ))}
          </ul>
          <div className="d-flex justify-content-center my-4">
            <Pagination
              count={movies.totalPage > 500 ? 500 : movies.totalPage}
              color="primary"
              onChange={(_, num) => setActivePage(num)}
            />
          </div>
        </>
      ) : (
        <h2 className="text-center text-success display-2 fw-semibold my-4">
          Loading...
        </h2>
      )}
    </div>
  );
};
