import { AudioPlayerProps } from "../types";
import styles from "./AudioPlayer.module.css";

const AudioPlayer = (props: AudioPlayerProps) => {
  const { contentId, contentTitle } = props;
  const contentUrl = `https://archive.org/embed/${contentId}&playlist=1`;
  const imgAltText = `Image for ${contentTitle}`;

  return (
    <section className={styles.audioPlayer}>
      <img
        src={`https://archive.org/services/img/${contentId}`}
        alt={imgAltText}
        title={imgAltText}
        className={styles.audioPlayer__image}
        data-testid={`${contentId}-img`}
      />
      <iframe
        src={contentUrl}
        width="480"
        className={styles.audioPlayer__playlist}
        title={`Audio player for ${contentTitle}`}
        allowFullScreen
      />
    </section>
  );
};

export default AudioPlayer;
