import React, { useState ,useContext } from 'react'
import { MovieDataContext } from '../context-api/movieContext'
import { Box, CircularProgress, IconButton, InputAdornment, Menu, MenuItem, Select, TextField, Typography } from '@mui/material';
import SortIcon from "@mui/icons-material/Sort"
import { Search } from '@mui/icons-material';
import MovieList from '../components/MovieList';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import SearchedMovies from '../components/SearchedMovies';
const SearchPage = () => {
    const {setSortBy , setOrder , setPage , sortBy , order ,loading , filterMovies , filterTotalPages} = useContext(MovieDataContext);
    const [anchorEl , setAnchorEl] = useState(null);

    const {setSearch , search} = useContext(MovieDataContext)

    const Search = styled('div')(({ theme }) => ({
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.white, 0.3),
      '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.5),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
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
      color: '#ffff',
      '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
          width: '20ch',
        },
      },
    }));
  
    return (
      <>
        

        <Box sx={{maxWidth:'100%',  backgroundColor:'#0a0a0a'}}>
          <Box sx={{p:4 ,display:"flex", justifyContent:"center" , gap:5}}>

            <Box>
              {/* <Search >
              <SearchIconWrapper>
                <SearchIcon/>
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search.."
                inputProps = {{'aria-label' :"search"}}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
               />
            </Search> */}

            <TextField
              sx={{bgcolor:"white"}}
              fullWidth
              size='small'
              placeholder='Search Movies...'
              onChange={(e) => setSearch(e.target.value) }
              InputProps={{
                startAdornment:(
                    <InputAdornment position='start'>
                        <SearchIcon />
                    </InputAdornment>
                )
              }} 
              />
            </Box>
          

            <Box>
              <Box sx={{display:"flex"}}>
                <IconButton onClick={(e) => setAnchorEl(e.currentTarget)}>
                  <Box sx={{display:"flex", gap:1}}>
                    <Typography sx={{color:"white"}}>Sort Movies</Typography>
                    <SortIcon fontSize="medium" sx={{color:"#ffff"}}/>
                  </Box>
                </IconButton>
              </Box>
              

                <Menu 
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={()=>setAnchorEl(null)}
                >
                  <Box sx={{px:2 , py:1}}>
                    <Typography variant='subtitle2'>Sort By</Typography>
                    <Select
                      fullWidth
                      size='small'
                      value={sortBy} 
                      onChange={(e)=> setSortBy(e.target.value)}
                    >
                      <MenuItem value="rating">Rating</MenuItem>
                      <MenuItem value="duration">Duration</MenuItem>
                      <MenuItem value="releaseDate">Release Date</MenuItem>
                      <MenuItem value="title">Title</MenuItem>


                    </Select>

                    <Typography variant='subtitle2' sx={{mt:2}}>Order</Typography>
                    <Select
                      fullWidth
                      size='small'
                      value={order}
                      onChange={(e) => setOrder(e.target.value)}
                    >
                      <MenuItem value="asc">Ascending</MenuItem>
                      <MenuItem value="desc">Descending</MenuItem>
                    </Select>
                  </Box>
                </Menu>
            </Box>
            
          </Box>
        </Box>
        {filterMovies.length === 0 ? <CircularProgress/> : <MovieList movie={filterMovies} totalPages={filterTotalPages}/> }
        
        
      </>
  )
}

export default SearchPage