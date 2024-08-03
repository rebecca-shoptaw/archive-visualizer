import { useRouteError } from "react-router-dom";

import styles from "./Visualizer.module.css";
import utils from "../styles/utils.module.css";

import { HOMEPAGE_PATH } from "../constants";

/**
 * Error page to be rendered if a work is not found
 * or the router errors.
 * 
 * @returns A full-page component with an error message and a button to return to the homepage
 */
const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <main>
      <section className={styles.visualizer}>
        <p>Oh no! We couldn't find that content.</p>
        <a href={HOMEPAGE_PATH} className={utils.customButton}>
          Try Again
        </a>
      </section>
    </main>
  );
};

export default ErrorPage;
