import styles from "./Visualizer.module.css";

const ContentPlayer = ({
  contentId,
  mediaType,
  filesCount,
}: {
  contentId: string;
  mediaType: string;
  filesCount: number;
}) => {
  let contentUrl = `https://archive.org/embed/${contentId}`;

  if (mediaType === "audio" && filesCount > 1) {
    contentUrl += "&playlist=1";
  }

  return (
    <iframe
      src={contentUrl}
      width="100%"
      height="480"
      className={styles.visualizer__contentPlayer}
      title={`Player for ${contentId}`}
      allowFullScreen
    />
  );
};

export default ContentPlayer;
