import styles from '@/styles/Footer.module.scss';
import { AiFillGithub } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillHome } from 'react-icons/ai'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { AiTwotoneMail } from 'react-icons/ai'

export default function Footer(){
  return (
    <>
      <footer className={styles['footer']}>
        <div className={styles['sociais']}>
          <h3>Redes Sociais</h3>
          <ul>
            <li>
              <AiFillGithub />
              <a href="https://github.com/JeanGS8" target='_blank'>Github</a>
            </li>
            <li>
              <AiFillLinkedin />
              <a href="https://www.linkedin.com/in/jeangs/" target='_blank'>Linkedin</a>
            </li>
          </ul>
        </div>
        <div className={styles['informacoes']}>
          <h3>Informações</h3>
          <ul>
            <li>
              <AiFillHome />
              <p>Maré, Rio de Janeiro - RJ</p>
            </li>
            <li>
              <BsFillTelephoneFill />
              <p>&#40;21&#41; 9 6670-8042</p>
            </li>
            <li>
              <AiTwotoneMail />
              <p>jean118877@hotmail.com</p>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}