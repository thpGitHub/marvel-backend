const { default: axios } = require("axios");
const express = require("express");
const app = express();

require('dotenv').config();

app.get("/", async (req, res) => {
    try {
        const response = await axios.get(`https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${process.env.MARVEL_API_KEY}`)
        res.json(response.data);
    } catch (error) {
        console.log(error);
    }
});
//MARVEL_API_KEY
// process.env.PORT

app.listen(4000, () => {
  console.log("Server has started");
});
