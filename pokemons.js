const express = require("express");
const pokemonsRouter = express.Router();

const allPokemon = require("./data");

//Retorna a lista completa dos pokemons
pokemonsRouter.get("/", (req, res) => {
  return res.status(200).json({ ...allPokemon });
});

//Retorna o pokemon buscando pelo id
pokemonsRouter.get("/:id", (req, res) => {
  const currentPokemon = allPokemon.find((currentPokemon) => {
    return currentPokemon.id == req.params.id;
  });

  return res.status(200).json({ ...currentPokemon });
});

//Retorna o pokemon buscando pelo nome
pokemonsRouter.get("/search/:name", (req, res) => {
  const currentPokemon = allPokemon.find((currentPokemon) => {
    return currentPokemon.name == req.params.name;
  });

  return res.status(200).json({ ...currentPokemon });
});

//Cria um novo pokemon
pokemonsRouter.post("/create-pokemon", (req, res) => {
  allPokemon.push({ ...req.body });
  return res.status(200).json({ ...allPokemon[allPokemon.length - 1] });
});

//Edita um pokemon existente
pokemonsRouter.put("/edit-pokemon/:id", (req, res) => {
  const indexToSubstitute = allPokemon.findIndex((currentPokemon) => {
    return currentPokemon.id == req.params.id;
  });

  allPokemon[indexToSubstitute] = {
    ...allPokemon[indexToSubstitute],
    ...req.body,
  };

  res.status(200).json({ ...allPokemon[indexToSubstitute] });
});

//Deleta um pokemon
pokemonsRouter.delete("/delete-pokemon/:id", (req, res) => {
  allPokemon.map((currentPokemon, i) => {
    if (currentPokemon.id == req.params.id) {
      allPokemon.splice(i, 1);
    }
  });

  res.status(200).json({});
});

module.exports = pokemonsRouter;
