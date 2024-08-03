import styles from "./Header.module.css";
import utils from "../styles/utils.module.css";

import { HOMEPAGE_PATH } from "../constants";

const Header = () => {
  return (
    <header className={styles.header}>
      <img src="./visualizer-icon.png" className={styles.header__image} alt="Blue telescope icon" />
      <a
        href={HOMEPAGE_PATH}
        className={[utils.glowyText, styles.header__title].join(" ")}
      >
        Visualizer
      </a>
      <a
        href={HOMEPAGE_PATH}
        className={[utils.customButton, styles.header__button].join(" ")}
      >
        New
      </a>
    </header>
  );
};

export default Header;
