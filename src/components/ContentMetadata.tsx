import { MetadataObject } from "../types";
import styles from "./ContentMetadata.module.css";
import { INCLUDE_KEYS } from "../constants";

const ContentMetadata = ({ data }: { data: MetadataObject }) => {
  return (
    <section className={styles.metadata}>
      {INCLUDE_KEYS.map(
        (key) =>
          data[key] && (
            <p key={key}>
              <span className={styles.metadata__key}>{key.toUpperCase()}</span>:{" "}
              <span className={styles.metadata__value}>{data[key]}</span>
            </p>
          )
      )}
    </section>
  );
};

export default ContentMetadata;
