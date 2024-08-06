import styles from "./Header.module.css";
import utils from "../styles/utils.module.css";

import { HOMEPAGE_PATH } from "../constants";

/**
 * Renders a header component for the site, with a logo, site title,
 * and a button and link that both lead to the homepage
 * (but could lead to different places -- i.e. a separate search form -- in the future).
 *
 * @returns A simple, reusable header component
 */
const Header = () => {
  return (
    <header className={styles.header}>
      <section className={styles.header__branding}>
        <img
          src="./visualizer-icon.png"
          className={styles.header__image}
          alt="Blue telescope icon"
        />
        <a
          href={HOMEPAGE_PATH}
          className={[utils.glowyText, styles.header__title].join(" ")}
          title="Go to Homepage"
        >
          Visualizer
        </a>
      </section>
      <a
        href={HOMEPAGE_PATH}
        className={[utils.customButton, styles.header__button].join(" ")}
        role="button"
        title="New Search"
      >
        New
      </a>
    </header>
  );
};

export default Header;
