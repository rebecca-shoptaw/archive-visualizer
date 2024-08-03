import styles from "./IdentifierSearchForm.module.css";
import utils from "../styles/utils.module.css";

import { HOMEPAGE_PATH } from "../constants";
import useDynamicIdentifier from "../hooks/useDynamicIdentifier";
import { linkBtnToEnterKey } from "../utils/utils";

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
          href={`${HOMEPAGE_PATH}#${identifier}`}
        >
          Go
        </a>
      </div>
    </section>
  );
};

export default IdentifierSearchForm;
