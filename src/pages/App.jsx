import { useState } from 'react'
import { Navigate, Route, Routes, useMatch } from 'react-router-dom'

import { Alert, AlertTitle, Box, Container, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

import HomePage from '@/pages/HomePage'
import LoginPage from '@/pages/LoginPage'
import NotePage from '@/pages/NotePage'
import NotesPage from '@/pages/NotesPage'
import UsersPages from '@/pages/UsersPages'

import { Footer, NavBar } from '@/features/layout'

const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [notes, setNotes] = useState([
    {
      id: 1,
      content: 'HTML is easy',
      important: true,
      user: 'Matti Luukkainen',
    },
    {
      id: 2,
      content: 'Browser can execute only JavaScript',
      important: false,
      user: 'Matti Luukkainen',
    },
    {
      id: 3,
      content: 'Most important methods of HTTP-protocol are GET and POST',
      important: true,
      user: 'Arto Hellas',
    },
  ])

  const [user, setUser] = useState(null)

  const [alert, setAlert] = useState(null)

  const login = (user) => {
    setUser(user)

    setAlert({
      type: 'success',
      message: `Welcome ${user}`,
    })

    setTimeout(() => {
      setAlert(null)
    }, 100000)
  }

  const logout = () => {
    setUser(null)
    setAlert({
      type: 'info',
      message: 'Logged out',
    })

    setTimeout(() => {
      setAlert(null)
    }, 100000)
  }

  const match = useMatch('/notes/:id')
  const note = match
    ? notes.find((note) => note.id === Number(match.params.id))
    : null

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        pt: 12,
      }}
    >
      <NavBar user={user} logout={logout} />

      {alert && (
        <Container>
          <Alert
            variant="outlined"
            severity={alert.type}
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setAlert(null)
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2 }}
          >
            <AlertTitle>Success</AlertTitle>
            {alert.message}
          </Alert>
        </Container>
      )}

      <Box as="main">
        <div>
          <Routes>
            <Route path="/notes/:id" element={<NotePage note={note} />} />
            <Route path="/notes" element={<NotesPage notes={notes} />} />
            <Route
              path="/users"
              element={user ? <UsersPages /> : <Navigate replace to="/login" />}
            />
            <Route path="/login" element={<LoginPage onLogin={login} />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </Box>
      <Footer />
    </Box>
  )
}

export default App
