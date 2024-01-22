import express , {Express,Request,Response} from 'express'

const app:Express = express()
const port = 4000

app.use('/', (req:Request,res:Response) => {
    res.send('Naks concurently')
})

app.listen(port , () => {
    console.log(`listening to port ${port}`);
})