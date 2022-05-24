const express = require('express')
const app = express()
const mongoose = require('mongoose')

app.use(
    express.urlencoded({
        extended: true,
    }),
)
app.use(express.json())
const Rotas = require('./routes/PessoaRoutes')
app.use('/person', Rotas)


mongoose.connect('mongodb+srv://diego02:9103919@cluster0.tqn9i.mongodb.net/diego02?retryWrites=true&w=majority')
.then(() => {
    console.log("Sucesso ao conectar ao Banco de dados")
    app.listen(3000)
})
.catch((err) => console.log(err))

app.get('/', (req, res) => {
    res.json({message: 'Hello Word Express'})
})

module.exports = app;