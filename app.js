import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


const app = express()
const port = 8080

// servir contenido estático
app.use( express.static('public') );

app.get('/hola-mundo', (req, res) => {
  res.send('Hola mundo desde su respectiva ruta')
})

app.get('/usuario', (req, res) => {
  res.sendFile( __dirname + '/public/usuario.html' )
})

app.get('/error', (req, res) => {
  res.sendFile( __dirname + '/public/404.html' )
})

app.listen(8080, () => {
  console.log(`Server is running on http://localhost:${port}`)
})