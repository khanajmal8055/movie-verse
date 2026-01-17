import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from '../api/axios.js'
import { Box, Button, Card, CardActionArea ,TextField , Typography} from '@mui/material'
import { Star } from '@mui/icons-material'
import { MovieDataContext } from '../context-api/movieContext.jsx'
import { UserDataContext } from '../context-api/UserContext.jsx'
import axiosFormdata from '../api/axiosFormData.js'

const MovieDetails = () => {
    const {id} = useParams()
    console.log(id);
    
    const [movieDetails, setMovieDetails] = useState({})

    const {deleteMovies} = useContext(MovieDataContext)

    const {admin} = useContext(UserDataContext)

    const [editForm, setEditForm] = useState({title:'' , description:"" , rating:""})
    const [poster, setPoster] = useState(null)
    const [isEditMode, setIsEditMode] = useState(false)

    const editMovie = async(e) =>{ 
        e.preventDefault()
        const formData = new FormData()
        formData.append("title", editForm.title)
        formData.append("description",editForm.description)
        formData.append("rating",editForm.rating)
        formData.append("poster",poster)

        try {
          const res = await axiosFormdata.put(`/movies/edit-movies/${id}`,formData)
          // console.log(res.data.data);
          
          setMovieDetails(res.data.data) 
          setIsEditMode(false)
        } 
        catch (error) {
          console.log(error);
          alert("Something went wrong while editing movie details")
          
        }
    }


    useEffect(()=>{
        async function movieDetails() {
            try {
                const res = await axios.get(`/movies/movie-details/${id}`)

                setMovieDetails(res.data.data);
                
            } 
            catch (error) {
                console.log(error);
                    
            }
        }

        movieDetails()
    },[id])

    // console.log(movieDetails);
    

    const dateString = new Date(movieDetails.releaseDate)
    const released = dateString.toLocaleDateString('en-GB') 

  return (
    
    // <Box sx={{display:"flex", justifyContent:"space-between", height:"full", background:"black", color:"white",p:8, gap:10}}>
    //     <Box sx={{width:"50%", p:2, overflow:'hidden', borderRadius:4, backgroundColor:"#ffff", display:"flex", justifyContent:"center",alignItems:"center"}}>
    //         <img width="100%" height="100%" src={movieDetails.poster} alt={movieDetails.title}/>
            
    //     </Box>
        
       
    //     <Box sx={{width:"50%", px:4}}>
    //         {/* <h1>Movie Details</h1> */}
    //         <h1>Name : {movieDetails.title}</h1>
    //         <h2>Description : {movieDetails.description}</h2>
    //         <h2>Duration : {movieDetails.duration}</h2>
    //         <h2>Released Date : {released}</h2>
    //         <h2>Rating : {movieDetails.rating}</h2>

    //         <Box sx={{display:"flex", justifyContent:"center", alignItems:"center", gap:16}}>
    //             <Button variant='contained' onClick={()=>{
    //                 console.log("Edit");
                    
    //             }}>Edit</Button>
    //             <Button variant='contained' color='error' onClick={() => {
    //                 console.log("Delete");
                    
    //             }}>Delete</Button>
    //         </Box>
 
    //     </Box>
            
    // </Box>
    <Box
    sx={{
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    justifyContent: "space-between",
    minHeight: "100vh",
    background: "black",
    color: "white",
    p: { xs: 2, sm: 4, md: 8 },
    gap: { xs: 4, md: 10 },
  }}
>
  {/* IMAGE SECTION */}
  <Box
    sx={{
      width: { xs: "100%", md: "50%" },
      p: { xs: 1, md: 2 },
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "#ffff",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      maxHeight: { xs: 400, md: "100%" },
    }}
  >
    <img
      src={movieDetails.poster}
      alt={movieDetails.title}
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        borderRadius: "12px",
      }}
    />
  </Box>

  {/* DETAILS SECTION */}
  
    <Box
    sx={{
      width: { xs: "100%", md: "50%" },
      px: { xs: 1, md: 4 },
    }}
  > 
    {!isEditMode && (
      <>
        <h1>Name : {movieDetails.title}</h1>
        <h2>Description : {movieDetails.description}</h2>
        <h2>Duration : {movieDetails.duration}</h2>
        <h2>Released Date : {released}</h2>
        <h2>Rating : {movieDetails.rating}</h2>
      </>
    )}
    {isEditMode && (
  <Box
    component="form"
    onSubmit={editMovie}
    encType='multipart/form-data'
    sx={{
      mt: 5,
      p: { xs: 3, md: 4 },
      borderRadius: 3,
      backgroundColor: '#141414', // lifted from black
      border: '1px solid rgba(255,255,255,0.12)',
      boxShadow: '0 20px 40px rgba(0,0,0,0.8)',
    }}
  >
    <Typography
      variant="h5"
      sx={{
        mb: 3,
        fontWeight: 700,
        color: '#ffffff',
        borderLeft: '4px solid #E50914',
        pl: 1.5,
      }}
    >
      Edit Movie
    </Typography>

    {/* TITLE */}
    <TextField
      fullWidth
      label="Title"
      name="title"
      value={editForm.title}
      onChange={(e) =>
        setEditForm({ ...editForm, title: e.target.value })
      }
      sx={{
        mb: 2,
        backgroundColor: '#0b0b0b',
        borderRadius: 1,
      }}
      InputLabelProps={{ style: { color: '#aaa' } }}
      InputProps={{ style: { color: '#fff' } }}
    />

    {/* DESCRIPTION */}
    <TextField
      fullWidth
      multiline
      rows={4}
      label="Description"
      name="description"
      value={editForm.description}
      onChange={(e) =>
        setEditForm({ ...editForm, description: e.target.value })
      }
      sx={{
        mb: 2,
        backgroundColor: '#0b0b0b',
        borderRadius: 1,
      }}
      InputLabelProps={{ style: { color: '#aaa' } }}
      InputProps={{ style: { color: '#fff' } }}
    />

    {/* RATING */}
    <TextField
      fullWidth
      label="Rating"
      name="rating"
      value={editForm.rating}
      onChange={(e) =>
        setEditForm({ ...editForm, rating: e.target.value })
      }
      sx={{
        mb: 3,
        backgroundColor: '#0b0b0b',
        borderRadius: 1,
      }}
      InputLabelProps={{ style: { color: '#aaa' } }}
      InputProps={{ style: { color: '#fff' } }}
    />

    {/* POSTER UPLOAD */}
    <Button
      component="label"
      variant="outlined"
      sx={{
        mb: 3,
        color: '#fff',
        borderColor: 'rgba(255,255,255,0.3)',
        '&:hover': {
          borderColor: '#E50914',
          backgroundColor: 'rgba(229,9,20,0.08)',
        },
      }}
    >
      Upload New Poster
      <input
        hidden
        type="file"
        accept="image/*"
        onChange={(e) => setPoster(e.target.files[0])}
      />
    </Button>

    {/* ACTION BUTTONS */}
    <Box sx={{ display: 'flex', gap: 2 }}>
      <Button
        type='submit'
        variant="contained"
        
        sx={{
          backgroundColor: '#E50914',
          fontWeight: 600,
          '&:hover': {
            backgroundColor: '#f40612',
          },
        }}
      >
        Save Changes
      </Button>

      <Button
        variant="outlined"
        color="error"
        onClick={() => setIsEditMode(false)}
      >
        Cancel
      </Button>
    </Box>
  </Box>
)}


    
    

    {admin && (
      <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: { xs: 2, md: 16 },
        mt: 4,
        flexWrap: "wrap",
      }}
    >
      <Button
        variant="contained"
        onClick={() => {
          setIsEditMode(true)
        }}
      >
        Edit
      </Button>

      <Button
        variant="contained"
        color="error"
        onClick={()=>{
          deleteMovies(id)
        }}
      >
        Delete
      </Button>
    </Box>
    )}
  </Box>
  
  
</Box>


    
  )
}

export default MovieDetails