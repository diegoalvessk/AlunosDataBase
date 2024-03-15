const express = require('express')
const app = express()
const db = require('./dataBase')
const dbcontext = db.AlunosDataBase()

app.use(express.json())

app.listen(3001, () => {
    console.log("servidor iniciado")
})

//GET
app.get('/alunos', async (req, res) => {
    res.status(200).send(await dbcontext.list())
})

//GET by ID
app.get('/alunos/:id', async (req, res) => {
    res.status(200).send(await dbcontext.get(req.params.id))
})




