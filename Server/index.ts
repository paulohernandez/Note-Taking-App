import express , {Express,Request,Response} from 'express'
import notesRouter from './routes/notesRoutes'
const app:Express = express()
const port = 4000

app.use('/api/notes', notesRouter)
app.listen(port , () => {
    console.log(`listening to port ${port}`);
})