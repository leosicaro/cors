const express = require("express")
const axios = require("axios")
const cors= require("cors")
const app = express()

app.use(cors())
app.get("/characters", async (req, res) => {
  
    const url= 'https://rickandmortyapi.com/api/character'

    try {
        const response =await axios.get(url)
        const characters= response.data.results;
        res.json(characters)
      
    } catch (ERROR) {
        res.status(500).json({error:"Error - Personajes no encontrados"})

    }
})

app.get("/characters/:name", async (req, res) => {
    const rickymortyName = req.params.name
    const characterUrl= `https://rickandmortyapi.com/api/character/?name=${rickymortyName}`

    try {
        const response = await axios.get(characterUrl)
        const Personaje= response.data.results[0];
        res.json(Personaje)
    } catch (ERROR) {
        res.status(404).json({error:"Personaje no encontrado"})

    }
})


app.listen(3000,() => {
    console.log ( " http://localhost:3000")
})