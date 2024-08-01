import { MetadataObject } from "../types";
import renderParsedHTML from "../utils/renderParsedHTML";
import toPunctuatedString from "../utils/toPunctuatedString";
import styles from "./ContentDescription.module.css";

const ContentDescription = ({ data }: { data: MetadataObject }) => {
  if (data.description) {
    renderParsedHTML(data.description as string, "full-description");
  }

  return (
    <section className={styles.description}>
      <h2 className={styles.description__title}>
        {data.title} ({data.date || data.publicdate})
      </h2>
      {data.director && <p>Directed by {toPunctuatedString(data.director)}</p>}
      {data.creator && <p>Created by {toPunctuatedString(data.creator)}</p>}
      {data.publisher && <p>Published by {toPunctuatedString(data.publisher)}</p>}
      <p id="full-description"></p>
    </section>
  );
};

export default ContentDescription;
