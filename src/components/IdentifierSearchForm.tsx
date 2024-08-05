import styles from "./IdentifierSearchForm.module.css";
import utils from "../styles/utils.module.css";

import useDynamicIdentifier from "../hooks/useDynamicIdentifier";
import { linkBtnToEnterKey, toHashedPath } from "../utils/utils";

/**
 * Renders a search "form" by dynamically altering the link href
 * to match the user-inputted identifier.
 * 
 * Uses a simple util function to make the link fire on-enter.
 * 
 * @returns A minimal, reusable identifier search form
 */
const IdentifierSearchForm = () => {
  const {identifier, handleIdentifierChange} = useDynamicIdentifier();
  linkBtnToEnterKey('search-button');

  return (
    <section className={styles.search} data-testid="search-form">
      <label htmlFor="identifier" className={styles.search__label}>
        Enter any Internet Archive identifier below:
      </label>
      <div className={styles.search__inputWrap}>
        <input
          id="identifier"
          className={styles.search__input}
          onChange={handleIdentifierChange}
          autoFocus
        />
        <a
          id="search-button"
          className={utils.customButton}
          href={toHashedPath(identifier)}
        >
          Go
        </a>
      </div>
    </section>
  );
};

export default IdentifierSearchForm;
