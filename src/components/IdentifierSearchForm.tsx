import { useState } from "react";
import styles from "./IdentifierSearchForm.module.css";

const IdentifierSearchForm = () => {
  const [identifier, setIdentifier] = useState("");
  const handleChange = (e: { target: { value: string } }) => {
    setIdentifier(e.target.value);
  };

  document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      console.log("entered!");
      const submitBtn = document.getElementById(
        "search-button"
      ) as HTMLAnchorElement;
      if (submitBtn) {
        submitBtn.click();
      }
    }
  });

  return (
    <section className={styles.search} data-testid="search-form">
      <label htmlFor="identifier" className={styles.search__label}>
        Enter any Internet Archive identifier below:
      </label>
      <div className={styles.search__inputWrap}>
        <input
          id="identifier"
          className={styles.search__input}
          onChange={handleChange}
          autoFocus
        />
        <a
          id="search-button"
          className={styles.search__button}
          href={`/archive-visualizer/#${identifier}`}
        >
          Go
        </a>
      </div>
    </section>
  );
};

export default IdentifierSearchForm;
