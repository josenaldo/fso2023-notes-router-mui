import { Typography } from '@mui/material'

const Logo = () => {
  return (
    <Typography
      variant="h6"
      component="div"
      sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
    >
      Notes Router MUI
    </Typography>
  )
}

export default Logo
