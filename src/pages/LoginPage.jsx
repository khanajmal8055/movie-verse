import React, { useContext, useState } from "react";
import {
  Box,
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  IconButton,
  InputAdornment,
  Fade,
  Alert,
  Link as MuiLink,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import MovieIcon from "@mui/icons-material/Movie";
import axios from "../api/axios.js";
import { Link, useNavigate } from "react-router-dom";
import { UserDataContext } from "../context-api/UserContext.jsx";

const Login = () => {
  const accentColor = "#E50914";

  const {isLoading , loginError , loginUser , loginForm , setLoginForm } = useContext(UserDataContext)

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  


  const navigate = useNavigate()

  // ✅ INPUT CHANGE
  const handleChange = (e) => {
    setLoginForm({...loginForm , [e.target.name] : e.target.value})
  };

  // ✅ SUBMIT (THIS WILL WORK)
  const handleSubmit = async (e) => {
    loginUser(e)
  };

  return (

    
    // 🔥 ISOLATED ROOT (NO CLICK HIJACK)
    <Box
      sx={{
        minHeight: "100vh",
        pointerEvents: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `
          radial-gradient(circle at 20% 50%, rgba(229,9,20,0.12), transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(229,9,20,0.08), transparent 50%),
          linear-gradient(135deg, #0a0a0a, #1a1a1a)
        `,
      }}
    >
      <Container maxWidth="sm">
        <Fade in timeout={600}>
          <Paper
            sx={{
              p: { xs: 4, sm: 6 },
              backgroundColor: "rgba(20,20,20,0.95)",
              borderRadius: 2,
              border: "1px solid rgba(255,255,255,0.1)",
              boxShadow: "0 10px 40px rgba(0,0,0,0.7)",
            }}
          >
            {/* HEADER */}
            <Box textAlign="center" mb={4}>
              <MovieIcon
                sx={{
                  fontSize: 48,
                  color: accentColor,
                  mb: 1,
                  filter: "drop-shadow(0 0 12px rgba(229,9,20,0.6))",
                }}
              />
              <Typography
                variant="h4"
                fontWeight={800}
                sx={{ color: "#fff" }}
              >
                Movie Verse
              </Typography>
              <Typography sx={{ color: "rgba(255,255,255,0.7)", mt: 1 }}>
                Sign in to continue
              </Typography>
            </Box>

            {/* ERROR */}
            {loginError && (
              <Alert
                severity="error"
                sx={{
                  mb: 3,
                  backgroundColor: "rgba(229,9,20,0.15)",
                  color: accentColor,
                }}
              >
                {loginError}
              </Alert>
            )}

            {/* FORM */}
            <Box component="form" onSubmit={handleSubmit}>
              <TextField
                fullWidth
                name="email"
                label="Email"
                value={loginForm.email}
                onChange={handleChange}
                margin="normal"
                autoComplete="email"
                sx={inputStyles(accentColor)}
              />

              <TextField
                fullWidth
                name="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                value={loginForm.password}
                onChange={handleChange}
                margin="normal"
                autoComplete="current-password"
                sx={inputStyles(accentColor)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword((p) => !p)}
                        sx={{ color: "rgba(255,255,255,0.7)" }}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <Button
                type="submit"
                fullWidth
                disabled={isLoading}
                sx={{
                  mt: 3,
                  py: 1.5,
                  fontWeight: 700,
                  backgroundColor: accentColor,
                  "&:hover": { backgroundColor: "#f40612" },
                }}
                variant="contained"
              >
                {isLoading ? "Signing in..." : "Sign In"}
              </Button>
            </Box>

            {/* FOOTER */}
            <Box
              mt={4}
              display="flex"
              justifyContent="space-between"
              flexWrap="wrap"
              gap={2}
            >
              <MuiLink
                component={Link}
                to="/signup"
                sx={{ color: "rgba(255,255,255,0.7)" }}
              >
                New here? Sign up
              </MuiLink>

              <MuiLink sx={{ color: "rgba(255,255,255,0.7)" }}>
                Forgot password?
              </MuiLink>
            </Box>
          </Paper>
        </Fade>
      </Container>
    </Box>
  );
};

const inputStyles = (accentColor) => ({
  backgroundColor: "rgba(255,255,255,0.05)",
  borderRadius: 1,
  input: { color: "#fff" },
  label: { color: "rgba(255,255,255,0.7)" },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "rgba(255,255,255,0.2)",
    },
    "&:hover fieldset": {
      borderColor: "rgba(255,255,255,0.4)",
    },
    "&.Mui-focused fieldset": {
      borderColor: accentColor,
      borderWidth: 2,
    },
  },
});

export default Login;
