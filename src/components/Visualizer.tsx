import { useParams } from "react-router-dom";

import styles from "./Visualizer.module.css";

import useFetchedData from "../hooks/useFetchedData";

import CustomHelmet from "./CustomHelmet";
import ErrorPage from "./ErrorPage";
import Header from "./Header";
import ContentPlayer from "./ContentPlayer";
import ContentDescription from "./ContentDescription";
import ContentMetadata from "./ContentMetadata";

/**
 * The main component for the site. Uses the content identifier (from search params),
 * along with the error state, metadata, related works data, and file count
 * (all from a custom hook), to display either:
 * - The error page, if there is no metadata for the provided identifier
 * - The content player, description and metadata for the provided identifier
 *
 * @returns A component that contains all the necessary logic and components to display an IA work
 */
const Visualizer = () => {
  const { id } = useParams();
  const { error, metadata, relatedWorks } = useFetchedData(id);

  return (
    <>
      {metadata && metadata.title && (
        <CustomHelmet title={metadata.title as string} />
      )}
      <Header />
      {error ? (
        <ErrorPage />
      ) : (
        <main>
          <section className={styles.visualizer}>
            {metadata && id ? (
              <>
                <ContentPlayer
                  contentId={id}
                  contentTitle={metadata.title as string}
                  mediaType={metadata.mediatype as string}
                />
                <section className={styles.visualizer__info}>
                  <ContentDescription
                    data={metadata}
                    relatedWorks={relatedWorks}
                  />
                  <ContentMetadata data={metadata} />
                </section>
              </>
            ) : (
              <p className="loading-indicator">Loading...</p>
            )}
          </section>
        </main>
      )}
    </>
  );
};

export default Visualizer;
