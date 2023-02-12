import { getPokemonById, getPokemons } from "@/services/service";
import styles from "@/styles/Pokemon.module.scss";
import Head from "next/head";
import Link from "next/link";

type pokemons = {
  name: string,
  url: string,
  id: number
}

export const getStaticPaths = async () => {
  
  const limit = 251;

  const response = await getPokemons(limit);

  const paths = response.map((pokemon: pokemons) => {
    return{
      params:{
        pokemonId: String(pokemon.id)
      }
    }
  })

  return {paths, fallback: false};
}

type pokemon = {
  id: number,
  name: string,
  foto: string,
  height: number,
  weight: number,
  types: {
    slot: number,
    type: {
      name: string,
      url: string
    }
  }[]
}

export const getStaticProps = async (context: { params: { pokemonId: string } }) => {
 
  const response = await getPokemonById(`${context.params.pokemonId}`);

  return{
    props:{pokemon: response}
  }
}

export default function Pokemon({pokemon}: {pokemon: pokemon}){
  return (
    <>
      <Head>
        <title>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.substring(1)}</title>
      </Head>

      <div className={styles['container']}>
        <div className={styles['card']}>
          <h2>{pokemon.id}</h2>
          <img src={pokemon.foto} alt={pokemon.name} />
          <h1>{pokemon.name}</h1>
      
          <div className={styles['tipos']}>
            {pokemon.types.map((item, index) => (
              <h3 key={index} className={styles[`tipos__${item.type.name}`]}>
                {item.type.name}
              </h3>
            ))}
          </div>
          <h4 className={styles['medidas']}>
            Altura: {pokemon.height * 10} cm
            <span></span>
            Peso: {pokemon.weight / 10} kg
          </h4>
          <Link href='/' className={styles['link']}>
            Voltar
          </Link>
        </div>
      </div>
    </>
  );
}