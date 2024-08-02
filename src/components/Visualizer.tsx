import { useParams } from "react-router-dom";
import styles from "./Visualizer.module.css";
import ContentDescription from "./ContentDescription";
import ContentMetadata from "./ContentMetadata";
import ContentPlayer from "./ContentPlayer";
import useFetchedData from "../hooks/useFetchedData";
import ErrorPage from "./ErrorPage";
import Header from "./Header";
import { Helmet } from "react-helmet";

const Visualizer = () => {
  const { id } = useParams();
  const { error, metadata, filesCount, relatedWorks } = useFetchedData(id);

  return (
    <>
      <Helmet>
        <title>
          {metadata
            ? `${metadata.title} | Archive Visualizer`
            : "Archive Visualizer"}{" "}
          |{" "}
        </title>
      </Helmet>
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
                  mediaType={metadata.mediatype as string}
                  filesCount={filesCount}
                />
                <section className={styles.visualizer__info}>
                  <ContentDescription data={metadata} relatedWorks={relatedWorks} />
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
