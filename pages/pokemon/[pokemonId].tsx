import { getPokemonById, getPokemons } from "@/services/service";

type pokemons = {
  name: string,
  url: string,
  id: number
}

export const getStaticPaths = async () => {
  
  const limit = 251;

  return await getPokemons(limit)
  .then(response => {
    const paths = response.map((pokemon: pokemons) => {
      return{
        params:{
          pokemonId: pokemon.id.toString()
        }
      }
    })

    return {paths, fallback: false};
  })
}

type pokemon = {
  id: number,
  name: string,
  foto: string,
  height: number,
  weight: number,
  types: string
}

export const getStaticProps = async (context: any) => {
 
  return await getPokemonById(`${context.params.pokemonId}`)
  .then(response => {
    return{
      props:{pokemon: response}
    }
  })
}

export default function Pokemon({pokemon}: {pokemon: pokemon}){
  return (
    <>
      {pokemon.name}
    </>
  );
}