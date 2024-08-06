import styles from "./RelatedWorks.module.css";
import utils from "../styles/utils.module.css";

import { RelatedWork } from "../types";
import {
  toCapitalized,
  toDateString,
  toHashedPath,
  toPunctuatedString,
} from "../utils/utils";

/**
 * Maps over the related works data to render each work
 * with its image, title/author/publish-date as available,
 * wrapped in a link to view it via a new visualizer.
 *
 * @param props Full related works data object
 * @returns A list of related works, each in its own clickable box
 */
const RelatedWorks = ({ data }: { data: RelatedWork[] }) => {
  return (
    <section className={styles.relatedWorks}>
      <h3 className={utils.glowyText}>Related Works</h3>
      {data.map((work) => (
        <section
          className={styles.relatedWorks__work}
          key={work._id}
          onClick={() => window.scrollTo(0, 0)}
        >
          <img
            src={`https://archive.org/services/img/${work._id}`}
            alt={`Image for ${work._id}`}
            className={styles.work__image}
            data-testid={`${work._id}-img`}
          />
          <section className={styles.work__info}>
            <a href={toHashedPath(work._id)} className={utils.customLink} title={`Go to visualizer for ${work._source.title}`}>
              <p className={styles.work__title}>{work._source.title}</p>
            </a>
            {work._source.creatorSorter && (
              <p className={styles.work__details}>
                {toCapitalized(toPunctuatedString(work._source.creatorSorter))}
              </p>
            )}
            {work._source.publicdate && (
              <p className={styles.work__details}>
                {toDateString(work._source.publicdate)}
              </p>
            )}
          </section>
        </section>
      ))}
    </section>
  );
};

export default RelatedWorks;
