import React from 'react'
import MovieList from '../components/MovieList'
import { Box } from '@mui/material'
import { MovieDataContext } from '../context-api/movieContext'

const HomePage = () => {
  
  return (
    <Box sx={{
      minHeight: '100vh',
      backgroundColor: '#0a0a0a',
      width: '100%',
      overflowX: 'hidden',
    }}>
      <MovieList />
    </Box>
  )
}

export default HomePage
