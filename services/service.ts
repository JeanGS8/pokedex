import axios from "axios"

type pokemon = {
  name: string,
  url: string,
  id: number
}

export const getPokemons = async (qtd: number) => {

  return await axios.get(`https://pokeapi.co/api/v2/pokemon//?limit=${qtd}`)
  .then(response => {
    const pokemons = response.data.results;
    pokemons.map((pokemon: pokemon, index: number) => {
      pokemon.id = index+1;
    })

    return pokemons;
  })
}

export const getPokemonById = async (id: string) => {
  return await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
  .then(response => {
    const pokemon = {
      "id": response.data.id,
      "name": response.data.forms[0].name,
      "foto": response.data.sprites.other[`official-artwork`].front_default,
      "height": response.data.height,
      "weight": response.data.weight,
      "types": response.data.types
    }

    return pokemon;
  })
}