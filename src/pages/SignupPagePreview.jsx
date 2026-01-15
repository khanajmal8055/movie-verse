import { useState ,useContext} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  Box,
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Link as MuiLink,
  Alert,
  InputAdornment,
  IconButton,
  Fade,
  LinearProgress,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import MovieIcon from '@mui/icons-material/Movie';
import { UserDataContext } from '../context-api/UserContext';

/**
 * PREVIEW COMPONENT - Netflix-Style Signup Page
 * 
 * Design Inspiration: Netflix, Amazon Prime Video
 * 
 * Design Features:
 * - Full-screen hero layout with dark gradient background
 * - Centered card with dark surface
 * - Large, bold typography
 * - Minimal form fields
 * - Strong primary CTA button (Netflix red-style)
 * - Password strength indicator with visual feedback
 * - High contrast for readability
 */
const SignupPagePreview = () => {
  const navigate = useNavigate();

  const {registerForm,setRegisterForm , registerUser , isLoading , errors} = useContext(UserDataContext)
  console.log(isLoading);
  

  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   password: '',
  //   confirmPassword: '',
  // });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  // const [errors, setErrors] = useState({});
  // const [isLoading, setIsLoading] = useState(false);
  const [signupError, setSignupError] = useState('');
  
  // Netflix red accent color
  const accentColor = '#E50914';
  
  const handleChange = (e) => {
    setRegisterForm({...registerForm , [e.target.name]:e.target.value})
  };
  
  
  
  const getPasswordStrength = () => {
    const password = registerForm.password;
    if (!password) return { strength: 0, percentage: 0 };
    
    let strength = 0;
    if (password.length >= 6) strength += 20;
    if (password.length >= 8) strength += 20;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength += 20;
    if (/\d/.test(password)) strength += 20;
    if (/[^a-zA-Z0-9]/.test(password)) strength += 20;
    
    return { strength, percentage: strength };
  };
  
  const passwordStrength = getPasswordStrength();
  
  const getPasswordStrengthColor = () => {
    if (passwordStrength.percentage <= 40) return accentColor;
    if (passwordStrength.percentage <= 60) return '#ff9800';
    if (passwordStrength.percentage <= 80) return '#ffc107';
    return '#4caf50';
  };
  
  const handleSubmit = async (e) => {
    registerUser(e)
  };
  
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)',
        backgroundImage: `
          radial-gradient(circle at 20% 50%, rgba(229, 9, 20, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(229, 9, 20, 0.08) 0%, transparent 50%),
          linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)
        `,
        py: { xs: 4, sm: 6 },
        px: { xs: 2, sm: 0 },
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(ellipse at center, rgba(229, 9, 20, 0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="sm" sx={{ position: 'relative', zIndex: 1 }}>
        <Fade in timeout={600}>
          <Paper
            elevation={0}
            sx={{
              p: { xs: 4, sm: 6 },
              borderRadius: 2,
              backgroundColor: 'rgba(20, 20, 20, 0.95)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.6)',
            }}
          >
            {/* Header */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                mb: 5,
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  mb: 3,
                }}
              >
                <MovieIcon 
                  sx={{ 
                    fontSize: 48, 
                    color: accentColor,
                    filter: 'drop-shadow(0 0 12px rgba(229, 9, 20, 0.6))',
                  }} 
                />
                <Typography 
                  variant="h3" 
                  component="h1" 
                  fontWeight={900}
                  sx={{
                    color: '#ffffff',
                    letterSpacing: '-0.03em',
                    fontSize: { xs: '2rem', sm: '2.5rem' },
                  }}
                >
                  Movie Verse
                </Typography>
              </Box>
              <Typography 
                variant="h4" 
                component="h2" 
                fontWeight={700}
                sx={{
                  color: '#ffffff',
                  mb: 1,
                  fontSize: { xs: '1.75rem', sm: '2rem' },
                  letterSpacing: '-0.02em',
                }}
              >
                Create Account
              </Typography>
              <Typography 
                variant="body1" 
                sx={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  textAlign: 'center',
                  fontSize: { xs: '0.9rem', sm: '1rem' },
                }}
              >
                Join us to discover amazing movies
              </Typography>
            </Box>
            
            {/* Error Alert */}
            {signupError && (
              <Alert 
                severity="error" 
                sx={{ 
                  mb: 3,
                  backgroundColor: 'rgba(229, 9, 20, 0.2)',
                  color: accentColor,
                  border: `1px solid ${accentColor}`,
                  '& .MuiAlert-icon': {
                    color: accentColor,
                  },
                }}
              >
                {signupError}
              </Alert>
            )}
            
            {/* Signup Form */}
            <Box component="form" onSubmit={handleSubmit} noValidate>
              <TextField
                fullWidth
                id="userName"
                name="userName"
                label="User Name"
                type="text"
                value={registerForm.userName}
                onChange={handleChange}
                error={!!errors.userName}
                helperText={errors.userName}
                margin="normal"
                required
                autoComplete="userName"
                autoFocus
                sx={{
                  mb: 2.5,
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    color: '#ffffff',
                    borderRadius: 1,
                    '& fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.2)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.3)',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: accentColor,
                      borderWidth: 2,
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: 'rgba(255, 255, 255, 0.7)',
                    '&.Mui-focused': {
                      color: accentColor,
                    },
                  },
                  '& .MuiFormHelperText-root': {
                    color: 'rgba(255, 255, 255, 0.5)',
                  },
                }}
              />
              
              <TextField
                fullWidth
                id="email"
                name="email"
                label="Email Address"
                type="email"
                value={registerForm.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
                margin="normal"
                required
                autoComplete="email"
                sx={{
                  mb: 2.5,
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    color: '#ffffff',
                    borderRadius: 1,
                    '& fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.2)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.3)',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: accentColor,
                      borderWidth: 2,
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: 'rgba(255, 255, 255, 0.7)',
                    '&.Mui-focused': {
                      color: accentColor,
                    },
                  },
                  '& .MuiFormHelperText-root': {
                    color: 'rgba(255, 255, 255, 0.5)',
                  },
                }}
              />

              <TextField
                fullWidth
                id="adminkey"
                name="adminKey"
                label="Admin Key"
                type="text"
                value={registerForm.adminKey}
                onChange={handleChange}
                error={!!errors.adminKey}
                helperText={errors.adminKey}
                margin="normal"
                required
                autoComplete=""
                sx={{
                  mb: 2.5,
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    color: '#ffffff',
                    borderRadius: 1,
                    '& fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.2)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.3)',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: accentColor,
                      borderWidth: 2,
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: 'rgba(255, 255, 255, 0.7)',
                    '&.Mui-focused': {
                      color: accentColor,
                    },
                  },
                  '& .MuiFormHelperText-root': {
                    color: 'rgba(255, 255, 255, 0.5)',
                  },
                }}
              />
              
              <TextField
                fullWidth
                id="password"
                name="password"
                label="Password"
                type={showPassword ? 'text' : 'password'}
                value={registerForm.password}
                onChange={handleChange}
                error={!!errors.password}
                helperText={errors.password || ' '}
                margin="normal"
                required
                autoComplete="new-password"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setShowPassword((prev) => !prev)}
                        edge="end"
                        sx={{
                          color: 'rgba(255, 255, 255, 0.7)',
                          '&:hover': {
                            color: accentColor,
                            backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          },
                        }}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  mb: 1.5,
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    color: '#ffffff',
                    borderRadius: 1,
                    '& fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.2)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.3)',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: accentColor,
                      borderWidth: 2,
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: 'rgba(255, 255, 255, 0.7)',
                    '&.Mui-focused': {
                      color: accentColor,
                    },
                  },
                  '& .MuiFormHelperText-root': {
                    color: 'rgba(255, 255, 255, 0.5)',
                  },
                }}
              />
              
              {/* Password Strength Indicator */}
              {registerForm.password && (
                <Box sx={{ mb: 2.5 }}>
                  <LinearProgress
                    variant="determinate"
                    value={passwordStrength.percentage}
                    sx={{
                      height: 4,
                      borderRadius: 2,
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      '& .MuiLinearProgress-bar': {
                        backgroundColor: getPasswordStrengthColor(),
                        borderRadius: 2,
                      },
                    }}
                  />
                  <Typography
                    variant="caption"
                    sx={{
                      color: 'rgba(255, 255, 255, 0.6)',
                      fontSize: '0.75rem',
                      mt: 0.5,
                      display: 'block',
                    }}
                  >
                    Password strength: {passwordStrength.percentage}%
                  </Typography>
                </Box>
              )}
              
              <TextField
                fullWidth
                id="fullName"
                name="fullName"
                label="Full Name"
                type="text"
                value={registerForm.fullName}
                onChange={handleChange}
                error={!!errors.fullName}
                helperText={errors.fullName || ' '}
                margin="normal"
                required
                autoComplete="fullName"
                // InputProps={{
                //   endAdornment: (
                //     <InputAdornment position="end">
                //       <IconButton
                //         aria-label="toggle password visibility"
                //         onClick={() => setShowConfirmPassword((prev) => !prev)}
                //         edge="end"
                //         sx={{
                //           color: 'rgba(255, 255, 255, 0.7)',
                //           '&:hover': {
                //             color: accentColor,
                //             backgroundColor: 'rgba(255, 255, 255, 0.05)',
                //           },
                //         }}
                //       >
                //         {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                //       </IconButton>
                //     </InputAdornment>
                //   ),
                // }}
                sx={{
                  mb: 4,
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    color: '#ffffff',
                    borderRadius: 1,
                    '& fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.2)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.3)',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: accentColor,
                      borderWidth: 2,
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: 'rgba(255, 255, 255, 0.7)',
                    '&.Mui-focused': {
                      color: accentColor,
                    },
                  },
                  '& .MuiFormHelperText-root': {
                    color: 'rgba(255, 255, 255, 0.5)',
                  },
                }}
              />
              
              <Button
                type="submit"
                fullWidth
                variant="contained"
                size="large"
                disabled={isLoading}
                sx={{
                  py: 1.75,
                  mb: 3,
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  backgroundColor: accentColor,
                  color: '#ffffff',
                  borderRadius: 1,
                  textTransform: 'none',
                  boxShadow: `0 4px 16px rgba(229, 9, 20, 0.4)`,
                  '&:hover': {
                    backgroundColor: '#f40612',
                    boxShadow: `0 6px 20px rgba(229, 9, 20, 0.5)`,
                    transform: 'translateY(-2px)',
                  },
                  '&:disabled': {
                    backgroundColor: 'rgba(229, 9, 20, 0.5)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                {isLoading ? 'Creating Account...' : 'Create Account'}
              </Button>
            </Box>
            
            {/* Footer Links */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                pt: 3,
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <MuiLink
                component={Link}
                to="/login"
                variant="body2"
                sx={{
                  fontWeight: 500,
                  textDecoration: 'none',
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontSize: '0.95rem',
                  '&:hover': {
                    color: accentColor,
                    textDecoration: 'underline',
                  },
                  transition: 'color 0.2s ease',
                }}
              >
                Already have an account? Sign in
              </MuiLink>
            </Box>
          </Paper>
        </Fade>
      </Container>
    </Box>
  );
};

export default SignupPagePreview;
