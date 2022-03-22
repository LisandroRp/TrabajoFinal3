import express from 'express'
import handlebars from 'express-handlebars'
const app = express()

app.use(express.static('public'))

app.engine('handlebars', handlebars.engine())
app.set('views', './public')
app.set('view engine', 'handlebars')

app.get('/', (req,res) => {
    console.log('Home');
    res.send("index");
})

app.get('/mensaje', (req,res) => {
    console.log('Mensajes');
    res.send("mensaje");
})

const PORT = process.env.PORT || 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor express escuchando en el puerto ${PORT}`)
})
server.on('error', error => console.log(`Error en el servidor ${error}`))