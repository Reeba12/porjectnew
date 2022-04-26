import * as React from 'react'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Fade from '@mui/material/Fade'
import IconButton from '@mui/material/IconButton'
import { Box, Divider, Typography } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import { allPaths } from '../../utils/constants'
import { useState } from 'react'
import Person from '@mui/icons-material/Person'
import Logout from '@mui/icons-material/Logout'
import MenuIcon from '@mui/icons-material/Menu'
import AccountCircle from '@mui/icons-material/AccountCircle'
import SearchIcon from '@mui/icons-material/Search'
import { styled, alpha } from '@mui/material/styles'
import InputBase from '@mui/material/InputBase'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
// import Avatar from '@mui/material/Avatar'
// import Box from '@mui/material/Box'

const HeaderAppBar = (props) => {
  // const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const { authActions, history, user } = props
  const [auth, setAuth] = useState(true)
  
  // const handleOpenNavMenu = (event) => {
  //   setAnchorElNav(event.currentTarget);
  // };
  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };
  
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: '1em',
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    '& .css-1kcggdq-MuiInputBase-root .MuiInputBase-input':{
      width:'20em'
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      // borderRadius: '1em',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));
  
  
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const profile = () => {
    handleClose()
    history?.push(allPaths.PROFILE_SETTINGS)
  }

  const logout = () => {
    setAnchorEl(null)
    authActions?.removeUser()
  }

  return (
    <>
      <AppBar position='static' sx={{backgroundColor:"#e91e63"}}>
        <Toolbar>
        <Typography
            variant='h6'
            component='div'
            className='mui-size'
            sx={{ flexGrow: 0.05, letterSpacing:"0.5em" }}
          > 
          MATHTRADE
          </Typography>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            // sx={{ mr: 2 }}
            onClick={() =>
              props?.generalActions?.setCollapsed(!props?.inlineCollapsed)
            }
          >
            <MenuIcon style={{ fontSize: 30 }} />
          </IconButton>
          <Typography
            variant='h6'
            component='div'
            className='mui-size'
            sx={{ flexGrow: 1 }}
            
          >
            &nbsp;
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search for ticker"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <div  style={{borderRight:"1px solid #fff", marginRight:"0.9em", paddingRight:"0.4em"}}>50%</div>
          {auth && (
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <IconButton
                type='submit'
                sx={{
                  p: 0,
                  color: 'white',
                  '&.MuiButtonBase-root:hover': {
                    bgcolor: 'transparent'
                  }
                }}
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup='true'
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                >
                <AccountCircle style={{ fontSize: 26 }} />
              </IconButton>
              <Menu
                id='fade-menu'
                MenuListProps={{
                  'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
                style={{ marginTop: 8 }}
                >
                <Box sx={{ my: 1.5, px: 2.5 }}>
                  <Typography
                    sx={{ color: 'text.primary' }}
                    variant='h5'
                    component='div'
                  >
                    <b>{user?.fullName}</b>
                  </Typography>
                  <Typography
                    // sx={{ color: 'text.secondary' }}
                    variant='p'
                    component='div'
                  >
                    {user?.email}
                  </Typography>
                </Box>
                <Divider sx={{ my: 1 }} />
                <MenuItem onClick={profile} className='mui-size'>
                  <Person style={{ fontSize: 22 }} /> &nbsp; Profile
                </MenuItem>
                <MenuItem onClick={logout} className='mui-size'>
                  <Logout style={{ fontSize: 22 }} /> &nbsp; Logout
                </MenuItem>
              </Menu>
              <b style={{marginLeft:"0.5em"}}>{user?.fullName}</b>
            </div>
          )}
          
          
          
          
{/*           
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
        </Toolbar>
      </AppBar>
    </>
  )
}

export default HeaderAppBar