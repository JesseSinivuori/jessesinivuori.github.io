import styles from './style';
import { Hero, Footer, Skills, Game } from './components';
import Website from './components/Website';
import ContactBottom from './components/ContactBottom';

//return home page
export default function App() {
  return (
    //container
    <div className="w-full overflow-hidden">

      {/**container */}
      <div className={`${styles.flexStart}`}>

        {/**content container */}
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      {/**container */}
      <div className={`${styles.paddingX} ${styles.flexStart}`}>

        {/**content container */}
        <div className={`${styles.boxWidth}`}>
          <Skills />
          <Game />
          <Website />
          <ContactBottom />
          <Footer styles={''} />
        </div>
      </div>
    </div>
  )
}

