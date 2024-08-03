import { RelatedWork } from "../types";
import styles from "./RelatedWorks.module.css";
import utils from "../styles/utils.module.css";
import { HOMEPAGE_PATH } from "../constants";

const RelatedWorks = ({ data }: { data: RelatedWork[] }) => {
  return (
    <section className={styles.relatedWorks}>
      <h3 className={utils.glowyText}>Related Works</h3>
      {data.map((work) => (
        <a
          href={`${HOMEPAGE_PATH}/#${work._id}`}
          className={styles.relatedWorks__work}
          key={work._id}
        >
          <img
            src={`https://archive.org/services/img/${work._id}`}
            alt={`Image for ${work._id}`}
            className={styles.work__image}
            data-testid={`${work._id}-img`}
          />
          <section className={styles.work__info}>
            <p className={styles.work__title}>{work._source.title}</p>
            {work._source.creatorSorter && (
              <p className={styles.work__details}>
                {work._source.creatorSorter}
              </p>
            )}
            {work._source.publicdate && <p className={styles.work__details}>{work._source.publicdate}</p>}
          </section>
        </a>
      ))}
    </section>
  );
};

export default RelatedWorks;
