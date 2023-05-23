import { useNavigate } from 'react-router-dom'

import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  TextField,
} from '@mui/material'

import { PageTitle } from '@/features/ui'

const LoginPage = (props) => {
  const navigate = useNavigate()

  const onSubmit = (event) => {
    event.preventDefault()
    props.onLogin('mluukkai')
    navigate('/')
  }

  return (
    <Container>
      <PageTitle>Login</PageTitle>

      <Card>
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
    </Container>
  )
}

export default LoginPage
