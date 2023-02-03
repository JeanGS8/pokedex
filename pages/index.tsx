import Card from "@/components/Card";
import { getPokemons } from "@/services/service";
import styles from "@/styles/Home.module.scss";

type pokemon = {
  name: string,
  url: string,
  id: number
}

export const getStaticProps = async () => {

  const limit = 251;
  
  return await getPokemons(limit)
  .then(response => {
    return{
      props: {pokemons: response}
    }
  })
}

export default function Home({pokemons}: {pokemons:pokemon[]}){
  return (
    <div className={styles['main']}>
      <div className={styles['main__container']}>
        {pokemons.map(pokemon => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}