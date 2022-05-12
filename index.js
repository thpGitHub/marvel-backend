const { default: axios } = require("axios");
const express = require("express");
const cors = require("cors");
// const formidableMiddleware = require("express-formidable");

const app = express();
app.use(cors());
// app.use(formidableMiddleware()); 

const PORT = process.env.PORT || 4000;

require('dotenv').config();

// app.get("/", async (req, res) => {
//     try {
//         const response = await axios.get(`https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${process.env.MARVEL_API_KEY}`)
//         res.json(response.data);
//     } catch (error) {
//         console.log(error);
//     }
// });
//http://localhost:4000/characters
app.get("/characters", async (req, res) => {
    try {
        const response = await axios.get(`https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.MARVEL_API_KEY}`)
        res.json(response.data)
    } catch (error) {
        
    }
})
app.get("/searchCharacters", async (req, res) => {
    try {
        const response = await axios.get(`https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.MARVEL_API_KEY}&name=${req.query.name}`)
        res.json(response.data)
        // console.log('req query ===', req.query);
        // res.json({message: "ok"})
    } catch (error) {       
    }
})

// https://lereacteur-marvel-api.herokuapp.com/character/5fcf91f4d8a2480017b91453?apiKey=UHEMx2q8JJztSDpA
app.get("/character/:id", async (req, res) => {
    try {
        const response = await axios.get(`https://lereacteur-marvel-api.herokuapp.com/character/${req.params.id}?apiKey=${process.env.MARVEL_API_KEY}`)
        res.json(response.data)

        // console.log('req params ===', req.params);
        // res.json({message: "ok"})
    } catch (error) {       
    }
})

app.get("/comics", async (req, res) => {
  try {
      const response = await axios.get(`https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${process.env.MARVEL_API_KEY}`)
      res.json(response.data)
      // console.log('req query ===', req.query);
      // res.json({message: "ok"})
  } catch (error) {       
  }
})

app.get("/comic/:id", async (req, res) => {
  try {
      const response = await axios.get(`https://lereacteur-marvel-api.herokuapp.com/comic/${req.params.id}?apiKey=${process.env.MARVEL_API_KEY}`)
      res.json(response.data)

      // console.log('req params ===', req.params);
      // res.json({message: "ok"})
  } catch (error) {       
  }
})



app.listen(PORT, () => {
  console.log("Server has started");
});




