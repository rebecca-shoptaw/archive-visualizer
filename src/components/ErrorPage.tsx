import styles from "./Visualizer.module.css";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <main>
      <section className={styles.visualizer}>
          <p>Oh no! We couldn't find that content.</p>
      </section>
    </main>
  )
}

export default ErrorPage