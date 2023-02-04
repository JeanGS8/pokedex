import Link from "next/link";
import styles from '@/styles/NotFound.module.scss';

export default function NotFound(){
  return (
    <>
      <div className={styles['container']}>
        <h1>404</h1>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/54.png`} alt="Psyduck" />
        <p>OPS! Não Encontramos Essa Página</p>
        <Link href='/'>Ir Para Home</Link>
      </div>
    </>
  );
}