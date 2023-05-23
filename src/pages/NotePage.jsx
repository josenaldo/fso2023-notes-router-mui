import {
  Avatar,
  Box,
  Card,
  CardContent,
  Container,
  Typography,
} from '@mui/material'
import { PageTitle } from '@/features/ui'
import GradeIcon from '@mui/icons-material/Grade'

const NotePage = ({ note }) => {
  return (
    <Container>
      <PageTitle>Note</PageTitle>

      <Card>
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            gap: '1.2rem',
          }}
        >
          <NoteAvatar note={note} />

          <Box>
            <Typography variant="h5">{note.content}</Typography>
            <Typography fontStyle="italic">{note.user}</Typography>
          </Box>
        </CardContent>
      </Card>
    </Container>
  )
}

const NoteAvatar = ({ note }) => {
  return (
    <Avatar
      sx={{
        bgcolor: note.important ? 'primary.main' : 'grey.500',
      }}
    >
      <GradeIcon />
    </Avatar>
  )
}

export default NotePage
