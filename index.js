const { default: axios } = require("axios");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = process.env.PORT || 4000;

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

app.listen(PORT, () => {
  console.log("Server has started");
});




