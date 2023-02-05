import Card from "@/components/Card";
import { getPokemons } from "@/services/service";
import styles from "@/styles/Home.module.scss";
import { ChangeEvent, useState } from "react";

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

  const [text, setText] = useState('');

  return (
    <div className={styles['main']}>
      <label htmlFor="text">
        Pesquisar: <input type="text" name="text" id="text" value={text} onChange={(e: ChangeEvent<HTMLInputElement>) => setText(e.target.value)} placeholder="nome" />
      </label>
      <div className={styles['main__container']}>
        {pokemons.map(pokemon => (
          (pokemon.name.includes(text.toLowerCase()) || text == '') &&
            <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}