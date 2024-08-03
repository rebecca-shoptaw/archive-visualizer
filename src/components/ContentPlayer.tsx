import styles from "./Visualizer.module.css";

import { ContentPlayerProps } from "../types";

/**
 * Renders an iframe to play the selected work.
 * If the work is an audio file, uses the file count to determine
 * whether to load it as a playlist.
 * 
 * @param props The work identifier (string), media type (string) and file count (number)
 * @returns Iframe to play or show the work's media.
 */
const ContentPlayer = (props: ContentPlayerProps) => {
  const { contentId, mediaType, filesCount } = props;
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
