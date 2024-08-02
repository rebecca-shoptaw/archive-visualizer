import { MetadataObject } from "../types";
import {renderParsedHTML, toPunctuatedString} from "../utils/utils.ts";
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
      {data.creator && <p>By {toPunctuatedString(data.creator)}</p>}
      {data.director && <p>Directed by {toPunctuatedString(data.director)}</p>}
      {data.publisher && <p>Published by {toPunctuatedString(data.publisher)}</p>}
      <p id="full-description">{data.description}</p>
    </section>
  );
};

export default ContentDescription;
