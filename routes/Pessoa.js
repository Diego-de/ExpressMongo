const mongoose = require('mongoose')

const Person = mongoose.model('Person', {
    Nome: String,
    Sobrenome: String,
    Salario: Number,
})

module.exports = Person