const {default: axios} = require('axios')
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
// const formidableMiddleware = require("express-formidable");

const app = express()
app.use(cors())
app.use(morgan('dev'))
// app.use(formidableMiddleware());

const PORT = process.env.PORT || 4000

require('dotenv').config()

app.get('/characters', async (req, res) => {
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.MARVEL_API_KEY}`,
    )
    res.json(response.data)
  } catch (error) {}
})
app.get('/searchCharacters', async (req, res) => {
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.MARVEL_API_KEY}&name=${req.query.name}`,
    )
    res.json(response.data)
  } catch (error) {}
})

app.get('/character/:id', async (req, res) => {
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/character/${req.params.id}?apiKey=${process.env.MARVEL_API_KEY}`,
    )
    res.json(response.data)
  } catch (error) {}
})

app.get('/comics', async (req, res) => {
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${process.env.MARVEL_API_KEY}`,
    )
    res.json(response.data)
  } catch (error) {}
})

app.get('/searchComics', async (req, res) => {
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${process.env.MARVEL_API_KEY}&title=${req.query.title}`,
    )
    res.json(response.data)
  } catch (error) {}
})

app.get('/comic/:id', async (req, res) => {
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comic/${req.params.id}?apiKey=${process.env.MARVEL_API_KEY}`,
    )
    res.json(response.data)
  } catch (error) {}
})

app.listen(PORT, () => {
  const date = new Date()
  console.log(`${date.getHours()}H${date.getMinutes()} on port : ${PORT}`)
})
