import { Box, Container } from '@mui/material'

import { PageTitle, UserCard } from '@/features/ui'

const UsersPages = () => (
  <Container>
    <PageTitle>TKTL notes app</PageTitle>

    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
      <UserCard user="Matti Luukkainen" />
      <UserCard user="Juha Tauriainen" />
      <UserCard user="Arto Hellas" />
    </Box>
  </Container>
)

export default UsersPages
