import express from 'express'
import { materialRouter} from './routes/material.routes.js'

const app = express()
const port = 3000

app.use(express.json())

app.use("/material", materialRouter)

app.listen(port, () =>{
    console.log(`app rodando em http://localhost:3000`);
})