import { useContext , useState } from "react"
import { MovieDataContext } from "./context-api/movieContext.jsx"
import { AppBar, TextField } from "@mui/material"
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Navbar from "./components/Navbar.jsx";
import MovieList from "./components/MovieList.jsx";
import HomePage from "./pages/HomePage.jsx";
import SearchPage from "./pages/SearchPage.jsx";
import { Route, Routes, useLocation } from "react-router-dom";

// ============================================
// PREVIEW COMPONENTS (UX IMPROVEMENTS DEMO)
// ============================================
// These are preview components demonstrating improved UX.
// They are completely isolated from production cod
import Login from "./pages/LoginPage.jsx"
import SignupPagePreview from "./pages/SignupPage.jsx";
import AddMovies from "./pages/AddMovies.jsx";
import MovieDetails from "./pages/MovieDetails.jsx";
// ============================================

const pages = ['Products', 'Pricing', 'Blog'];
  const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
  
  


function App() {
  const {setPage , page , movie , loading , setSearch , getMoviesBySearch} = useContext(MovieDataContext)
  


  // console.log(story);

  // const handleChange = (e)=>{
  //   e.preventDefault()
  //   setSearch(e.target.value)
  // }


  
  
  
  
  
  
  return (
    <>
      
      <Navbar/>

      <Routes>
        
        <Route path="/" element={<HomePage/>} />
        <Route path="/filter" element={<SearchPage/>}/>
        
        
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignupPagePreview/>} />
        <Route path="/add-movies" element={<AddMovies/>} />
        <Route path="/movie-details/:id" element={<MovieDetails/>}/>
       
      </Routes>  
      
    </>
  )
  
}

export default App
