import express from 'express'

const app = express()
const port = 8080

// servir contenido estático
app.use( express.static('public') );

app.get('/hola-mundo', (req, res) => {
  res.send('Hola mundo desde su respectiva ruta')
})

app.get('/error', (req, res) => {
  res.send('404 | Página no encontrada')
})

app.listen(8080, () => {
  console.log(`Server is running on http://localhost:${port}`)
})