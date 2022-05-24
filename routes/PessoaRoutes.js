const router = require('express').Router();
const Person = require('../routes/Pessoa')

router.post('/', async (req, res) => {
    const {Nome, Sobrenome, Salario} = req.body
    if (!Nome){
        res.status(422).json({ error: 'O nome é obrigatório' })
    }
    const person = {
        Nome,
        Sobrenome,
        Salario
    }
    try {
        await Person.create(person)
        res.status(201).json({message: "Pessoa inserida no sistema"})
    } catch (error) {
        res.status(500).json({error: error})
    }
})


router.get('/', async (req, res) => {
    try {
        const people = await Person.find()
        res.status(200).json(people)
    } catch (error) {
        res.status(500).json({error: error})
    }
})

module.exports = router;