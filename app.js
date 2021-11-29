const express = require("express");

const pokemonsRouter = require("./pokemons")

const PORT = 4000;

const app = express();

app.use(express.json());
app.use("/pokemons", pokemonsRouter);

app.listen(PORT, () => console.log(`Server up and running at port ${PORT}`));
