import { Box, Button, Card, CardContent, TextField } from '@mui/material'

import { useNavigate } from 'react-router-dom'

const LoginPage = (props) => {
  const navigate = useNavigate()

  const onSubmit = (event) => {
    event.preventDefault()
    props.onLogin('mluukkai')
    navigate('/')
  }

  return (
    <div>
      <h2>Login</h2>

      <Card
        sx={{
          maxWidth: 600,
          mx: 'auto',
        }}
      >
        <CardContent>
          <Box
            component="form"
            onSubmit={onSubmit}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}
          >
            <TextField label="Username" fullWidth />
            <TextField label="Password" type="password" fullWidth />
            <Button variant="contained" color="primary" type="submit">
              Login
            </Button>
          </Box>
        </CardContent>
      </Card>
    </div>
  )
}

export default LoginPage
