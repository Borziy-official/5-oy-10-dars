import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import { useContext, useEffect } from 'react';
import useDebounce from '../../Hooks/UseDebounce/UseDebounse';
import { useNavigate } from 'react-router-dom';
import { SearchInputContext } from '../../context/SearchInputContext';
import { MoviesContext } from '../../context/MoviesContext';
import { PaginationContext } from '../../context/PaginationContext';

export const Header = () => {
  const navigate = useNavigate();

  const { input, setInput } = useContext(SearchInputContext);

  const { activePage, setActivePage } = useContext(PaginationContext);

  const debouncedSearchTerm = useDebounce(input, 700);

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

  useEffect(() => {}, [debouncedSearchTerm]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: 'block' }}
          >
            The Movies App
          </Typography>
          <input
            className="form-control w-25"
            type="text"
            placeholder="Search"
            style={{ padding: '7px 10px 7px 10px', fontSize: '13px' }}
            onChange={(evt) => {
              const inputVal = evt.target.value;
              setInput(inputVal);
              if (inputVal) {
                navigate('/search/movies');
              } else {
                navigate('/');
                setActivePage(1);
              }
            }}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
};
