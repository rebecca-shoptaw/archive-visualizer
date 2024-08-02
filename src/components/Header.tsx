import styles from "./Header.module.css";
import utils from "../styles/utils.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <img src="./visualizer-icon.png" className={styles.header__image} />
      <a
        href="/archive-visualizer/"
        className={[utils.glowyText, styles.header__title].join(" ")}
      >
        Visualizer
      </a>
      <a
        href="/archive-visualizer/"
        className={[utils.customButton, styles.header__button].join(" ")}
      >
        New
      </a>
    </header>
  );
};

export default Header;
