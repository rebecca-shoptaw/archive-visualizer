import { MetadataObject, RelatedWork } from "../types";
import { renderParsedHTML, toPunctuatedString } from "../utils/utils.ts";
import styles from "./ContentDescription.module.css";
import utils from "../styles/utils.module.css";
import RelatedWorks from "./RelatedWorks.tsx";

const ContentDescription = ({
  data,
  relatedWorks,
}: {
  data: MetadataObject;
  relatedWorks: null | RelatedWork[];
}) => {
  if (data.description) {
    renderParsedHTML(data.description as string, "full-description");
  }

  return (
    <section className={styles.description}>
      <h2 className={utils.glowyText}>
        {data.title} ({data.date || data.publicdate})
      </h2>
      {data.creator && <p>By {toPunctuatedString(data.creator)}</p>}
      {data.director && <p>Directed by {toPunctuatedString(data.director)}</p>}
      {data.publisher && (
        <p>Published by {toPunctuatedString(data.publisher)}</p>
      )}
      <p id="full-description"></p>
      {relatedWorks && <RelatedWorks data={relatedWorks} />}
    </section>
  );
};

export default ContentDescription;
