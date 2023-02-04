import styles from '@/styles/Sobre.module.scss';

export default function Sobre(){
  return (
    <>
      <div className={styles['sobre']}>
        <h1>Sobre o Projeto</h1>
        <p>PokeNext é um app construido em Next.js para consultar pokémons</p>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/61.png`} alt="Poliwhirl" />
      </div>
    </>
  );
}