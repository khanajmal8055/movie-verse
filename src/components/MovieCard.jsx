import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Box
} from '@mui/material'
import {useContext} from 'react'
import StarIcon from '@mui/icons-material/Star'
import { UserDataContext } from '../context-api/UserContext'
import { Link, useNavigate } from 'react-router-dom'

const MovieCard = ({ movie }) => {
  const {admin} = useContext(UserDataContext)
  const navigate = useNavigate()

  const handleNavigate = (id)=>{
      navigate(`/movie-details/${id}`)
  }

  const dateString = new Date(movie.releaseDate)
  const released = dateString.toLocaleDateString('en-GB') 

  return (
    <>
       <Card
      sx={{
        width: "100%",
        maxWidth: 220,
        height: 380, // 🔒 fixed height for consistency
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#141414",
        borderRadius: 2,
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.08)",
        transition: "transform 0.25s ease, box-shadow 0.25s ease",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 16px 28px rgba(0,0,0,0.6)",
        },
      }}
    >
      <CardActionArea
        onClick={()=>{
          handleNavigate(movie._id)
        }}
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
        }}
      >
        {/* 🎞 Poster Section */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: 240, // 🔒 fixed poster height
            backgroundColor: "#1c1c1c",
            overflow: "hidden",
            flexShrink: 0,
          }}
        >
          {movie.poster ? (
            <Box
              component="img"
              src={movie.poster}
              alt={movie.title}
              loading="lazy"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.3s ease",
                ".MuiCard-root:hover &": {
                  transform: "scale(1.05)",
                },
              }}
            />
          ) : (
            <Box
              sx={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "rgba(255,255,255,0.4)",
                fontSize: "0.85rem",
              }}
            >
              No Image
            </Box>
          )}

          {/* ⭐ Rating Badge */}
          <Box
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              backgroundColor: "rgba(0,0,0,0.75)",
              borderRadius: 1,
              px: 0.75,
              py: 0.25,
              display: "flex",
              alignItems: "center",
              gap: 0.4,
            }}
          >
            <StarIcon sx={{ fontSize: 14, color: "#f5c518" }} />
            <Typography
              variant="caption"
              sx={{ color: "#fff", fontWeight: 600 }}
            >
              {movie.rating || "N/A"}
            </Typography>
          </Box>
        </Box>

        {/* 📄 Content */}
        <CardContent
          sx={{
            flex: 1,
            p: 1.5,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            backgroundColor: "#141414",
          }}
        >
          {/* 🎬 Title */}
          <Typography
            sx={{
              color: "#fff",
              fontWeight: 600,
              fontSize: "0.95rem",
              lineHeight: 1.3,
              height: "2.6em", // 🔒 lock title height
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
            }}
          >
            {movie.title}
          </Typography>

          {/* 🕒 Meta Info (optional space for future) */}
          <Typography
            variant="caption"
            sx={{
              color: "rgba(255,255,255,0.6)",
              fontSize: "0.75rem",
              mt: 1,
            }}
          >
            {released || ""}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </>
  )
}

export default MovieCard
