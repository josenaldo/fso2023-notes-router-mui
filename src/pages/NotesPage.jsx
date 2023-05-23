import { Link } from 'react-router-dom'
import {
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from '@mui/material'

import ForwardIcon from '@mui/icons-material/Forward'
import { PageTitle } from '@/features/ui'

const NotesPage = ({ notes }) => (
  <Container>
    <PageTitle>Notes</PageTitle>

    <TableContainer component={Paper}>
      <Table>
        <TableBody>
          {notes.map((note) => (
            <TableRow key={note.id}>
              <TableCell>
                <Typography
                  variant="link"
                  component={Link}
                  to={`/notes/${note.id}`}
                >
                  {note.content}
                </Typography>
              </TableCell>
              <TableCell>{note.user}</TableCell>
              <TableCell>
                <Typography
                  variant="link"
                  component={Link}
                  to={`/notes/${note.id}`}
                >
                  <ForwardIcon />
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Container>
)

export default NotesPage
