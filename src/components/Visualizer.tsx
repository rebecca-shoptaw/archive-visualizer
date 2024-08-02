import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./Visualizer.module.css";
import { MetadataObject } from "../types";
import ContentDescription from "./ContentDescription";
import ContentMetadata from "./ContentMetadata";
import ContentPlayer from "./ContentPlayer";

const Visualizer = () => {
  const [error, setError] = useState(false);
  const [metadata, setMetadata] = useState<null | MetadataObject>(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://archive.org/metadata/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.metadata) {
          setMetadata(data.metadata);
        } else setError(true);

        if (data.files_count > 1) {
          console.log("playlist");
        }
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  }, [id]);

  return (
    <main>
      <section className={styles.visualizer}>
        {error ? (
          <p>Oh no! We couldn't find that content.</p>
        ) : metadata && id ? (
          <>
            <ContentPlayer contentId={id} />
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
