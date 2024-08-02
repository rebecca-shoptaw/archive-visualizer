import { useParams } from "react-router-dom";
import styles from "./Visualizer.module.css";
import ContentDescription from "./ContentDescription";
import ContentMetadata from "./ContentMetadata";
import ContentPlayer from "./ContentPlayer";
import useFetchedData from "../hooks/useFetchedData";

const Visualizer = () => {
  const { id } = useParams();
  const { error, metadata, filesCount } = useFetchedData(id);

  return (
    <main>
      <section className={styles.visualizer}>
        {error ? (
          <p>Oh no! We couldn't find that content.</p>
        ) : metadata && id ? (
          <>
            <ContentPlayer
              contentId={id}
              mediaType={metadata.mediatype as string}
              filesCount={filesCount}
            />
            <section className={styles.visualizer__info}>
              <ContentDescription data={metadata} />
              <ContentMetadata data={metadata} />
            </section>
          </>
        ) : (
          <p className="loading-indicator">Loading...</p>
        )}
      </section>
    </main>
  );
};

export default Visualizer;
