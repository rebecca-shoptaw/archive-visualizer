import { MetadataObject } from "../types";
import renderParsedHTML from "../utils/renderParsedHTML";
import styles from "./ContentDescription.module.css";

const ContentDescription = ({ data }: { data: MetadataObject }) => {
  if (data.description) {
    renderParsedHTML(data.description, "full-description");
  }

  return (
    <section className={styles.description}>
      <h2 className={styles.description__title}>
        {data.title} ({data.date})
      </h2>
      {data.publisher && <p>Published by {data.publisher}</p>}
      {data.director && <p>Directed by {data.director}</p>}
      {data.creator && <p>Created by {data.creator}</p>}
      <p id="full-description"></p>
    </section>
  );
};

export default ContentDescription;
