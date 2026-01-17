import {
  Box,
  Button,
  TextField,
  Typography,
  Rating,
  Stack,
  Paper
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useContext } from "react";
import { MovieDataContext } from "../context-api/movieContext";
import { Handshake } from "@mui/icons-material";

const AddMovies = () => {
    const {uploadMovie, movieForm,setMovieForm , setPoster} = useContext(MovieDataContext)

    const handleChange = (e)=>{
        setMovieForm({...movieForm , [e.target.name]:e.target.value})
    }

    const handleFileChange = (e)=>{
        // console.log("hello");
        
        setPoster(e.target.files[0])
    }

    const handleSubmit = (e)=>{
        uploadMovie(e)
    }
 return (
    <Box
  sx={{
    minHeight: "100vh",
    backgroundColor: "#000",
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    px: { xs: 2, md: 6 },
    py: 6,
  }}
>
  <Paper
    elevation={10}
    sx={{
      width: "100%",
      maxWidth: 900,
      backgroundColor: "#fe0404af",
      borderRadius: 4,
      p: { xs: 3, md: 5 },
    }}
  >
    <Typography variant="h4" fontWeight={600} mb={4} color="#000">
      Upload New Movie
    </Typography>

    {/* ✅ FORM START */}
    <Box
      component="form"
      onSubmit={handleSubmit}
      encType="multipart/form-data"
    >
      <Stack spacing={3}>

        {/* Poster Upload */}
        <Button
          component="label"
          variant="outlined"
          startIcon={<CloudUploadIcon />}
          sx={{
            color: "#fff",
            backgroundColor: "#050505",
            borderColor: "rgba(255,255,255,0.3)",
            "&:hover": {
              borderColor: "#e50914",
              backgroundColor: "rgba(252, 2, 52, 0.99)",
            },
          }}
        >
          Upload Movie Poster
          <input
            type="file"
            hidden
            accept="image/*"
            onChange={handleFileChange}
          />
        </Button>

        {/* Title */}
        <TextField
          sx={{ backgroundColor: "#050505" }}
          name="title"
          value={movieForm.title}
          onChange={handleChange}
          label="Movie Title"
          fullWidth
          InputLabelProps={{ style: { color: "#aaa" } }}
          InputProps={{ style: { color: "#fff" } }}
        />

        {/* Description */}
        <TextField
          sx={{ backgroundColor: "#050505" }}
          name="description"
          value={movieForm.description}
          onChange={handleChange}
          label="Description"
          multiline
          rows={4}
          fullWidth
          InputLabelProps={{ style: { color: "#aaa" } }}
          InputProps={{ style: { color: "#fff" } }}
        />

        {/* Duration & Release Date */}
        <Box
          sx={{
            display: "flex",
            gap: 2,
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <TextField
            sx={{ backgroundColor: "#050505" }}
            name="duration"
            value={movieForm.duration}
            label="Duration (minutes)"
            onChange={handleChange}
            fullWidth
            InputLabelProps={{ style: { color: "#aaa" } }}
            InputProps={{ style: { color: "#fff" } }}
          />

          <TextField
            sx={{ backgroundColor: "#050505" }}
            name="releaseDate"
            value={movieForm.releaseDate}
            label="Release Date"
            type="date"
            onChange={handleChange}
            fullWidth
            InputLabelProps={{
              shrink: true,
              style: { color: "#aaa" },
            }}
            InputProps={{ style: { color: "#fff" } }}
          />
        </Box>

        {/* Rating */}
        <TextField
          sx={{ backgroundColor: "#050505" }}
          name="rating"
          value={movieForm.rating}
          label="Rating"
          onChange={handleChange}
          fullWidth
          InputLabelProps={{ style: { color: "#aaa" } }}
          InputProps={{ style: { color: "#fff" } }}
        />

        {/* IMDb ID */}
        <TextField
          sx={{ backgroundColor: "#050505" }}
          name="imdbId"
          value={movieForm.imdbId}
          onChange={handleChange}
          label="IMDb ID"
          placeholder="tt1234567"
          fullWidth
          InputLabelProps={{ style: { color: "#aaa" } }}
          InputProps={{ style: { color: "#fff" } }}
        />

        {/* Submit */}
        <Button
          type="submit"
          variant="contained"
          size="large"
          sx={{
            mt: 2,
            backgroundColor: "#0a090a",
            fontWeight: 600,
            "&:hover": {
              backgroundColor: "rgba(252, 2, 52, 0.99)",
            },
          }}
        >
          Upload Movie
        </Button>

      </Stack>
    </Box>
    {/* ✅ FORM END */}
  </Paper>
</Box>

  );
}

export default AddMovies