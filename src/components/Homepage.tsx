import styles from "./Homepage.module.css";
import utils from "../styles/utils.module.css";

import IdentifierSearchForm from "./IdentifierSearchForm";

/**
 * Renders a homepage for the site, including a large logo, 
 * a site title/description, and a mini search form.
 * 
 * @returns A simple homepage component
 */
const Homepage = () => {
  return (
    <main className={styles.homepage}>
      <img className={styles.homepage__logo} src='./visualizer-icon.png' alt="Blue telescope icon" />
      <h2 className={styles.homepage__heading}>
        Hello and welcome to <span className={utils.glowyText}>Visualizer</span>
      </h2>
      <p>
        A new way to visualize content from the{" "}
        <a
          className={utils.customLink}
          href="https://archive.org/"
          target="_blank"
        >
          Internet Archive
        </a>
        's vast collection 🔭✨
      </p>
      <IdentifierSearchForm />
    </main>
  );
};

export default Homepage;
