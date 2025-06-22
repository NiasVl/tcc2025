const express = require("express")
const { config } = require("dotenv")

const app = express ()

const { conexao, testarConexao, closeConexao } = require('./src/DAO/conn.js')

app.get('/', (req, res) => {
    res.send('API Acolha funfando!')
})


app.post('/acolha/v1/add_usuarios', async (req, res) =>{
    let {nome} = req.body
    const infos = [codigo, nome, telefone, limite, id_endereco, id_status]
    let result = await incluirCliente(infos)
    res.json(result)
})





app.listen (process.env.PORTA, (err) =>{
    if (err) {
        res.status(500).json({ erro: 'Erro ao conectar com o banco de dados'})
        return
      }
      console.log("operando na porta " + process.env.PORTA),
      testarConexao();
  
});