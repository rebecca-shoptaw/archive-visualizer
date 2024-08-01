import ContentDescription from "./ContentDescription";
import ContentMetadata from "./ContentMetadata";
import ContentPlayer from "./ContentPlayer";
import { useState, useEffect } from "react";
import styles from "./Visualizer.module.css";
import { MetadataObject } from "../types";

const Visualizer = () => {
  const [loading, setLoading] = useState(false);
  const [metadata, setMetadata] = useState<null | MetadataObject>(null);
  const CONTENT_ID = "InformationM";

  const fetchMetadata = () => {
    fetch(`https://archive.org/metadata/${CONTENT_ID}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setMetadata(data.metadata);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    setLoading(true);
    fetchMetadata();
    setLoading(false);
  }, []);

  return (
    <main>
      <section className={styles.visualizer}>
        {loading ? (
          <p className="loading-indicator">Loading...</p>
        ) : metadata ? (
          <>
            <ContentPlayer contentId={CONTENT_ID} />
            <section className={styles.visualizer__info}>
              <ContentDescription data={metadata} />
              <ContentMetadata data={metadata} />
            </section>
          </>
        ) : (
          <p>Oh no! We couldn't find that content.</p>
        )}
      </section>
    </main>
  );
};

export default Visualizer;
