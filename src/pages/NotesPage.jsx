import { Link } from 'react-router-dom'
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from '@mui/material'

import ForwardIcon from '@mui/icons-material/Forward'

const NotesPage = ({ notes }) => (
  <div>
    <h2>Notes</h2>
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
  </div>
)

export default NotesPage
