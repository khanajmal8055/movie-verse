import React, { useContext } from 'react'
import { MovieDataContext } from '../context-api/movieContext'
import { Box, Grid, Pagination, Typography, CircularProgress } from '@mui/material'
import MovieCard from './MovieCard'

const MovieList = ({movie , totalPages}) => {
    const {page , setPage} = useContext(MovieDataContext)
    
    const handlePageChange = (event, value)=>{
        setPage(value)
    }
  return (
    <>
    <Box sx={{
      p: { xs: 2, sm: 3, md: 4 },
      backgroundColor: '#0a0a0a',
      minHeight: '100vh',
      width: '100%',
      boxSizing: 'border-box',
    }}>    
        {/* <Typography 
          variant="h4" 
          component="h1"
          sx={{
            color: '#ffffff',
            fontWeight: 700,
            mb: { xs: 3, sm: 4 },
            fontSize: { xs: '1.75rem', sm: '2rem', md: '2.25rem' },
            letterSpacing: '-0.02em',
          }}
        >
          Popular Movies
        </Typography> */}
        
        <Grid 
          container 
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "repeat(2, 1fr)",   // mobile
                  sm: "repeat(3, 1fr)",   // tablet
                  md: "repeat(5, 1fr)",   // desktop → ✅ 5 per row
                },
                gap: { xs: 2, sm: 2.5, md: 3 },
                justifyItems: "center",
              }}
        >
            {movie.map((mo)=>(
                <Box key={mo._id} sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
                  <MovieCard movie={mo} />
                </Box>
            ))}
        </Grid>

        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          mt: { xs: 4, sm: 6 },
          mb: 4,
        }}>
            <Pagination 
                count={totalPages}
                page={page}
                onChange={handlePageChange}
                sx={{
                  '& .MuiPaginationItem-root': {
                    color: '#e5e5e5',
                    '&.Mui-selected': {
                      backgroundColor: '#E50914',
                      color: '#ffffff',
                      fontWeight: 700,
                      '&:hover': {
                        backgroundColor: '#f40612',
                      },
                    },
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      color: '#ffffff',
                    },
                  },
                  '& .MuiPaginationItem-icon': {
                    color: '#e5e5e5',
                  },
                }}
            />
        </Box>

    </Box>
    </>
  )
}

export default MovieList
