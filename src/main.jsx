import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/styles/index.css';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SearchInputContextProvider } from './context/SearchInputContext';
import { MoviesContextProvider } from './context/MoviesContext';
import { PaginationContextProvider } from './context/PaginationContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <SearchInputContextProvider>
      <MoviesContextProvider>
        <PaginationContextProvider>
          <App />
        </PaginationContextProvider>
      </MoviesContextProvider>
    </SearchInputContextProvider>
  </BrowserRouter>
);
