import styles from "./Visualizer.module.css";
import utils from "../styles/utils.module.css";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <main>
      <section className={styles.visualizer}>
        <p>Oh no! We couldn't find that content.</p>
        <a href="/" className={utils.customButton}>
          Try Again
        </a>
      </section>
    </main>
  );
};

export default ErrorPage;
