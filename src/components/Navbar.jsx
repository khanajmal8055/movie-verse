import { useTheme } from '@mui/material/styles'
import { AppBar, IconButton, Toolbar, Typography, useMediaQuery ,Box, TextField, InputAdornment, Avatar, Menu, MenuItem, Drawer , Button, Container, Paper, Fade } from '@mui/material'
import MenuIcon from "@mui/icons-material/Menu"
import SearchIcon from "@mui/icons-material/Search"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import MovieIcon from "@mui/icons-material/Movie"
import Visibility from "@mui/icons-material/Visibility"
import VisibilityOff from "@mui/icons-material/VisibilityOff"
import {useContext, useState} from 'react'
import { MovieDataContext } from '../context-api/movieContext'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { UserDataContext } from '../context-api/UserContext'

const Navbar = () => {

    const {setSearch} = useContext(MovieDataContext)

    const {isLoggedIn, user , logoutUser,admin} = useContext(UserDataContext)
    
    
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const [anchorEl, setAnchorEl] = useState(null);
    const [drawerOpen, setDrawerOpen] = useState(false);

    const [loginOpen, setLoginOpen] = useState(false);
    const [signupOpen, setSignupOpen] = useState(false);

    const navigate = useNavigate()


    
    
    

    // const isLoggedIn = false; // later replace with auth state

    // User menu handlers
    const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
    const handleMenuClose = () => setAnchorEl(null);
    
    // Netflix red accent color
    const accentColor = '#E50914';
    
  return (
    <>
        <AppBar 
            position='sticky'
            top={0}
            elevation={0}
            sx={{
                backgroundColor: '#141414',
                color: '#ffffff',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                zIndex: 1300,
                width: '100%',
                overflowX: 'hidden'
            }}
        >
            <Toolbar sx={{
                justifyContent:'space-between',
                px: { xs: 2, sm: 4 },
                minHeight: { xs: 64, sm: 70 },
                maxWidth: '1920px',
                mx: 'auto',
                width: '100%',
                boxSizing: 'border-box',
            }}>
                {isMobile && (
                    <IconButton 
                        onClick={()=>setDrawerOpen(true)}
                        sx={{
                            color: '#ffffff',
                            '&:hover': {
                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            },
                        }}
                    >
                        <MenuIcon/>
                    </IconButton>
                )}
                <Box sx={{display:'flex', alignItems:'center' , gap: 1.5, flex: { xs: 1, md: 'none' }}}>
                    <MovieIcon 
                        sx={{ 
                            color: accentColor, 
                            fontSize: { xs: 28, sm: 32 },
                            filter: 'drop-shadow(0 0 8px rgba(229, 9, 20, 0.5))',
                        }} 
                    />
                    <Typography 
                        variant="h5"
                        component={Link}
                        to="/"
                        sx={{
                            fontWeight: 900,
                            color: '#ffffff',
                            textDecoration: 'none',
                            fontSize: { xs: '1.25rem', sm: '1.5rem' },
                            letterSpacing: '-0.02em',
                            '&:hover': {
                                color: accentColor,
                                transition: 'color 0.3s ease',
                            },
                        }}
                    >
                        Movie Verse
                    </Typography>
                </Box>
                {!isMobile && (
                    <Box sx={{display:'flex' , alignItems:'center' , gap: { xs: 3, md: 5 }, flex: 1, justifyContent: 'center', ml: { xs: 4, md: 8 }, minWidth: 0 }}>
                        <NavLink
                            to="/"
                            end
                            style={({ isActive }) => ({
                                textDecoration: 'none',
                            })}
                        >
                            {({ isActive }) => (
                                <Typography 
                                    variant="h6" 
                                    sx={{
                                        fontWeight: isActive ? 700 : 500,
                                        fontSize: '1rem',
                                        color: isActive ? accentColor : '#e5e5e5',
                                        position: 'relative',
                                        '&:hover': {
                                            color: accentColor,
                                        },
                                        transition: 'color 0.3s ease',
                                        '&::after': isActive ? {
                                            content: '""',
                                            position: 'absolute',
                                            bottom: -8,
                                            left: 0,
                                            right: 0,
                                            height: 2,
                                            backgroundColor: accentColor,
                                            borderRadius: 1,
                                        } : {},
                                    }}
                                >
                                    Home
                                </Typography>
                            )}
                        </NavLink>
                        <NavLink
                            to="/filter"
                            style={({ isActive }) => ({
                                textDecoration: 'none',
                            })}
                        >
                            {({ isActive }) => (
                                <Typography 
                                    variant="h6" 
                                    sx={{
                                        fontWeight: isActive ? 700 : 500,
                                        fontSize: '1rem',
                                        color: isActive ? accentColor : '#e5e5e5',
                                        position: 'relative',
                                        '&:hover': {
                                            color: accentColor,
                                        },
                                        transition: 'color 0.3s ease',
                                        '&::after': isActive ? {
                                            content: '""',
                                            position: 'absolute',
                                            bottom: -8,
                                            left: 0,
                                            right: 0,
                                            height: 2,
                                            backgroundColor: accentColor,
                                            borderRadius: 1,
                                        } : {},
                                    }}
                                >
                                    Search Movies
                                </Typography>
                            )}
                        </NavLink>
                        {admin && (
                            <NavLink
                            to="/add-movies"
                            style={({ isActive }) => ({
                                textDecoration: 'none',
                            })}
                        >
                            {({ isActive }) => (
                                <Typography 
                                    variant="h6" 
                                    sx={{
                                        fontWeight: isActive ? 700 : 500,
                                        fontSize: '1rem',
                                        color: isActive ? accentColor : '#e5e5e5',
                                        position: 'relative',
                                        '&:hover': {
                                            color: accentColor,
                                        },
                                        transition: 'color 0.3s ease',
                                        '&::after': isActive ? {
                                            content: '""',
                                            position: 'absolute',
                                            bottom: -8,
                                            left: 0,
                                            right: 0,
                                            height: 2,
                                            backgroundColor: accentColor,
                                            borderRadius: 1,
                                        } : {},
                                    }}
                                >
                                    Add Movies
                                </Typography>
                            )}
                        </NavLink>
                        )}
                    </Box>
                )}

                {/* User Icon only on desktop */}
                {!isMobile && (
                    <>
                        <IconButton 
                            onClick={handleMenuOpen}
                            sx={{
                                p: 0.5,
                                '&:hover': {
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                },
                                transition: 'background-color 0.2s ease',
                            }}
                        >
                            <Avatar
                                sx={{
                                    width: 36,
                                    height: 36,
                                    bgcolor: isLoggedIn ? accentColor : 'rgba(255, 255, 255, 0.2)',
                                    color: '#ffffff',
                                    fontWeight: 700,
                                    fontSize: '0.9rem',
                                    border: isLoggedIn ? `2px solid ${accentColor}` : '2px solid rgba(255, 255, 255, 0.3)',
                                    boxShadow: isLoggedIn ? `0 0 12px rgba(229, 9, 20, 0.4)` : 'none',
                                    transition: 'all 0.3s ease',
                                }}
                            >
                                {isLoggedIn ? user.fullName.charAt(0) : <AccountCircleIcon />}
                            </Avatar>
                        </IconButton>

                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleMenuClose}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            PaperProps={{
                                sx: {
                                    mt: 1.5,
                                    minWidth: 180,
                                    backgroundColor: '#1a1a1a',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
                                    borderRadius: 1,
                                    overflow: 'hidden',
                                },
                            }}
                            MenuListProps={{
                                sx: {
                                    py: 0.5,
                                },
                            }}
                        >
                            {!isLoggedIn ? (
                                <Box>
                                    <MenuItem 
                                        onClick={()=>{
                                            setLoginOpen(true);
                                            handleMenuClose();
                                        }}
                                        sx={{
                                            py: 1.5,
                                            px: 2,
                                            color: '#e5e5e5',
                                            '&:hover': {
                                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                                color: '#ffffff',
                                            },
                                            transition: 'all 0.2s ease',
                                        }}
                                    >   
                                        <Link to='/login'><Typography variant="body1" fontWeight={500}>Login</Typography></Link>
                                        
                                    </MenuItem>
                                    <MenuItem 
                                        onClick={()=>{
                                            setSignupOpen(true);
                                            handleMenuClose();
                                        }}
                                        sx={{
                                            py: 1.5,
                                            px: 2,
                                            color: '#e5e5e5',
                                            '&:hover': {
                                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                                color: '#ffffff',
                                            },
                                            transition: 'all 0.2s ease',
                                        }}
                                    >
                                        
                                        <Link to={'/signup'}>
                                            <Typography variant="body1" fontWeight={500}>Sign Up</Typography>
                                        </Link>
                                    </MenuItem>
                                </Box>
                            ) : (
                                <MenuItem 
                                    onClick={logoutUser}
                                    sx={{
                                        py: 1.5,
                                        px: 2,
                                        color: accentColor,
                                        '&:hover': {
                                            backgroundColor: 'rgba(229, 9, 20, 0.2)',
                                            color: accentColor,
                                        },
                                        transition: 'all 0.2s ease',
                                    }}
                                >
                                    <Typography variant="body1" fontWeight={600}>Logout</Typography>
                                </MenuItem>
                            )}
                        </Menu>
                    </>
                )}
            </Toolbar>
        </AppBar>

        {/* Mobile Drawer */}
        <Drawer
            anchor="left"
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
            PaperProps={{
                sx: {
                    width: { xs: 280, sm: 320 },
                    backgroundColor: '#141414',
                    color: '#ffffff',
                    borderRight: '1px solid rgba(255, 255, 255, 0.1)',
                },
            }}
        >
            <Box sx={{ width: '100%', pt: 3 }}>
                <Box sx={{ px: 3, pb: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
                        <MovieIcon 
                            sx={{ 
                                color: accentColor, 
                                fontSize: 32,
                                filter: 'drop-shadow(0 0 8px rgba(229, 9, 20, 0.5))',
                            }} 
                        />
                        <Typography variant="h5" fontWeight={900} sx={{ letterSpacing: '-0.02em' }}>
                            Movie Verse
                        </Typography>
                    </Box>
                    <Box sx={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', pt: 2 }}>
                        <Button
                            component={Link}
                            to="/"
                            fullWidth
                            onClick={() => setDrawerOpen(false)}
                            sx={{
                                justifyContent: 'flex-start',
                                color: '#e5e5e5',
                                mb: 1,
                                '&:hover': {
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                    color: '#ffffff',
                                },
                                transition: 'all 0.2s ease',
                            }}
                        >
                            Home
                        </Button>
                        <Button
                            component={Link}
                            to="/filter"
                            fullWidth
                            onClick={() => setDrawerOpen(false)}
                            sx={{
                                justifyContent: 'flex-start',
                                color: '#e5e5e5',
                                '&:hover': {
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                    color: '#ffffff',
                                },
                                transition: 'all 0.2s ease',
                            }}
                        >
                            Search Movies
                        </Button>
                        {admin && (
                            <Button
                            component={Link}
                            to="/add-movies"
                            fullWidth
                            onClick={() => setDrawerOpen(false)}
                            sx={{
                                justifyContent: 'flex-start',
                                color: '#e5e5e5',
                                '&:hover': {
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                    color: '#ffffff',
                                },
                                transition: 'all 0.2s ease',
                            }}
                        >
                            Add Movies
                        </Button>
                        )}
                        
                    </Box>
                </Box>

                <Box sx={{ px: 2, pt: 2, borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
                    {!isLoggedIn ? (
                        <>
                            <Button 
                                fullWidth 
                                onClick={() => {
                                    setLoginOpen(true);
                                    setDrawerOpen(false);
                                    navigate('/login')
                                }}
                                sx={{
                                    py: 1.5,
                                    mb: 1.5,
                                    backgroundColor: accentColor,
                                    color: '#ffffff',
                                    fontWeight: 600,
                                    fontSize: '1rem',
                                    boxShadow: `0 4px 12px rgba(229, 9, 20, 0.4)`,
                                    '&:hover': {
                                        backgroundColor: '#f40612',
                                        boxShadow: `0 6px 16px rgba(229, 9, 20, 0.5)`,
                                        transform: 'translateY(-1px)',
                                    },
                                    transition: 'all 0.3s ease',
                                }}
                            >
                                Login
                            </Button>
                            <Button
                                fullWidth 
                                onClick={() => {
                                    setSignupOpen(true);
                                    setDrawerOpen(false);
                                    navigate('/signup')
                                }}
                                sx={{
                                    py: 1.5,
                                    border: '2px solid',
                                    borderColor: 'rgba(255, 255, 255, 0.3)',
                                    color: '#ffffff',
                                    fontWeight: 600,
                                    fontSize: '1rem',
                                    '&:hover': {
                                        borderColor: accentColor,
                                        backgroundColor: 'rgba(229, 9, 20, 0.1)',
                                        color: accentColor,
                                    },
                                    transition: 'all 0.3s ease',
                                }}
                            >
                                Signup
                            </Button>
                        </>
                    ) : (
                        <Button 
                            fullWidth
                            onClick={()=>{
                                logoutUser()
                                setDrawerOpen(false)

                            }}
                            sx={{
                                py: 1.5,
                                backgroundColor: accentColor,
                                color: '#ffffff',
                                fontWeight: 600,
                                fontSize: '1rem',
                                boxShadow: `0 4px 12px rgba(229, 9, 20, 0.4)`,
                                '&:hover': {
                                    backgroundColor: '#f40612',
                                    boxShadow: `0 6px 16px rgba(229, 9, 20, 0.5)`,
                                    transform: 'translateY(-1px)',
                                },
                                transition: 'all 0.3s ease',
                            }}
                        >
                            Logout
                        </Button>
                    )}
                </Box>
            </Box>
        </Drawer>

        
    </>
  )
}

export default Navbar
