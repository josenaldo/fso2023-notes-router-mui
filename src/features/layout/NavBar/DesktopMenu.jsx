import { Link } from 'react-router-dom'
import { Box, Button } from '@mui/material'
import LoginIcon from '@mui/icons-material/Login'
import LogoutIcon from '@mui/icons-material/Logout'

const DesktopMenu = ({ navItems, user, logout }) => {
  return (
    <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
      {navItems.map((item) => (
        <Button key={item.link} component={Link} to={item.link}>
          {item.text}
        </Button>
      ))}

      <UserButton user={user} logout={logout} />
    </Box>
  )
}

const UserButton = ({ user, logout }) => {
  return (
    <>
      {user ? (
        <Button endIcon={<LogoutIcon />} onClick={logout}>
          {user} logged in
        </Button>
      ) : (
        <Button component={Link} to={'/login'} endIcon={<LoginIcon />}>
          Login
        </Button>
      )}
    </>
  )
}

export default DesktopMenu
