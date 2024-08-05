import styles from "./Visualizer.module.css";

import { ContentPlayerProps } from "../types";

import AudioPlayer from "./AudioPlayer";

/**
 * Renders an iframe to play the selected work.
 * If the work is an audio file, uses the file count to determine
 * whether to load it as a playlist.
 *
 * @param props The work identifier (string), media type (string) and file count (number)
 * @returns Iframe to play or show the work's media.
 */
const ContentPlayer = (props: ContentPlayerProps) => {
  const { contentId, contentTitle, mediaType } = props;
  const contentUrl = `https://archive.org/embed/${contentId}`;

  return mediaType !== "audio" ? (
    <iframe
      src={contentUrl}
      width="100%"
      height="480"
      className={styles.visualizer__contentPlayer}
      title={`Player for ${contentTitle}`}
      allowFullScreen
    />
  ) : (
    <AudioPlayer contentId={contentId} contentTitle={contentTitle} />
  );
};

export default ContentPlayer;
