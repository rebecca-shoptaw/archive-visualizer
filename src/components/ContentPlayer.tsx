import styles from "./Visualizer.module.css";

const ContentPlayer = ({ contentId }: { contentId: string }) => {
  return (
    <iframe
      src={`https://archive.org/embed/${contentId}`}
      width="100%"
      height="480"
      className={styles.visualizer__contentPlayer}
      title={`Video for ${contentId}`}
      allowFullScreen
    />
  );
};

export default ContentPlayer;
