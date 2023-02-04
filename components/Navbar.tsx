import styles from '@/styles/Navbar.module.scss';

export default function Navbar(){

  return (
    <div className={styles['container']}>
      <div className={styles['logo']}>
        <img src="" alt="" />
        <h1>Pokedex</h1>
      </div>

      <ul className={styles['lista']}>
        <li>Home</li>
        <li>Sobre</li>
      </ul>
    </div>
  );
}