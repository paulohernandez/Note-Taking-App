import express , { Router} from 'express'
import notesApi from '../controllers/notesApi'
const notesRouter:Router = express.Router() 

notesRouter.get('/', notesApi.fetchNotes) 

notesRouter.post('/', notesApi.insertNote )

notesRouter.get('/:noteId', notesApi.fetchSingleNote )

notesRouter.put('/:noteId', notesApi.updateNote )

notesRouter.delete('/:noteId', notesApi.deleteNote )

export default notesRouter