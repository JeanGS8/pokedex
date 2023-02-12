import styles from "@/styles/Card.module.scss";
import Link from "next/link";

type pokemon = {
  name: string,
  url: string,
  id: number
}

export default function Card({pokemon}: {pokemon: pokemon}){
  return (
    <div className={styles['container']}>
      <h2>{pokemon.id}</h2>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} alt={pokemon.name} />
      <h1>{pokemon.name}</h1>
      <Link href={`/pokemon/${pokemon.id}`} className={styles['link']}>
        Detalhes
      </Link>
    </div>
  );
}