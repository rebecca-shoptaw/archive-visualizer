import styles from "./ContentMetadata.module.css";

import { ContentMetadataProps } from "../types";
import { INCLUDE_KEYS } from "../constants";
import { toPunctuatedString } from "../utils/utils.ts";

/**
 * Renders the content metadata in key-value pairs.
 * Uses the INCLUDE_KEYS content to decide which of the key/value pairs to render (if present).
 * 
 * @param props Full metadata object for the work
 * @returns Content metadata component, with metadata rendered in key-value pairs
 */
const ContentMetadata = (props: ContentMetadataProps) => {
  const { data } = props;

  return (
    <section className={styles.metadata}>
      {INCLUDE_KEYS.map(
        (key) =>
          data[key] && (
            <p key={key}>
              <span className={styles.metadata__key}>{key.toUpperCase()}</span>:{" "}
              <span className={styles.metadata__value}>
                {toPunctuatedString(data[key])}
              </span>
            </p>
          )
      )}
    </section>
  );
};

export default ContentMetadata;
