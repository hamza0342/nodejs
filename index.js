import express from 'express'
import bodyParser from 'body-parser'
import router from './routes/users.js'

const app = express()
const PORT = 5000

app.use(bodyParser.json())

app.use('/users', router)

// app.get('/', (req, res) => {console.log('Test')
// res.send('Hello from home page')
// })

// app.get('/page2', (req, res) => {
//     res.send('Hello from page 2')
// })

app.listen(PORT, ()=> {
    console.log(`Server running on port http://localhost:${PORT}`)
})