import { AudioPlayerProps } from "../types";
import styles from "./AudioPlayer.module.css";

/**
 * Renders an audio player and associated image for the work.
 * Defaults to rendering it in playlist view.
 * 
 * @param props IA identifier for work, work title (for alt text)
 * @returns Audio player component with work image and playlist iframe
 */
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
