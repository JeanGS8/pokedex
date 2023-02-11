import styles from '@/styles/Navbar.module.scss';
import Link from 'next/link';

export default function Navbar(){
  return (
    <div className={styles['container']}>
      <h1 className={styles['logo']}>Poké<span>dex</span></h1>

      <ul className={styles['lista']}>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/sobre'>Sobre</Link>
        </li>
      </ul>
    </div>
  );
}