import { MetadataObject } from "../types";
import styles from "./ContentDescription.module.css";

const ContentDescription = ({ data }: { data: MetadataObject }) => {
  return (
    <section className={styles.description}>
      <h2 className={styles.description__title}>
        {data.title} ({data.date})
      </h2>
      <p>Published by {data.publisher}</p>
      <p>{data.description}</p>
    </section>
  );
};

export default ContentDescription;
