import { useRouteError } from "react-router-dom";

import styles from "./Visualizer.module.css";
import utils from "../styles/utils.module.css";

import { HOMEPAGE_PATH } from "../constants";

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
