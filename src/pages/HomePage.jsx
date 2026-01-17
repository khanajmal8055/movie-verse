import React, { useContext } from 'react'
import MovieList from '../components/MovieList'
import { Box, CircularProgress } from '@mui/material'
import { MovieDataContext } from '../context-api/movieContext'

const HomePage = () => {

  const {movie , loading , totalPages} = useContext(MovieDataContext)
  
  return (
    <Box sx={{
      minHeight: '100vh',
      backgroundColor: '#0a0a0a',
      width: '100%',
      overflowX: 'hidden',
    }}>
      {loading ? <CircularProgress/> : <MovieList movie={movie} totalPages={totalPages} /> }
      
    </Box>
  )
}

export default HomePage
