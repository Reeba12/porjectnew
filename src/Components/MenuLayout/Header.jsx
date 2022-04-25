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

const HeaderAppBar = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const { authActions, history, user } = props
  const [auth, setAuth] = useState(true)
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
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
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
            </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  )
}

export default HeaderAppBar