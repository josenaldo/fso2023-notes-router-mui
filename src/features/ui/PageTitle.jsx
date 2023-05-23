import { Typography } from '@mui/material'

const PageTitle = ({ children }) => {
  return (
    <Typography variant="h3" component="h2" mb="2rem">
      {children}
    </Typography>
  )
}

export default PageTitle
