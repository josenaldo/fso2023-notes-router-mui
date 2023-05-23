import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
})

theme.typography.link = {
  textDecoration: 'none',
  color: theme.palette.primary.main,

  '&:hover': {
    textDecoration: 'underline',
    color: theme.palette.primary.dark,
  },
}

export default theme
