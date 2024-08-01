import ContentDescription from "./ContentDescription";
import ContentMetadata from "./ContentMetadata";
import ContentPlayer from "./ContentPlayer";

const Visualizer = () => {
  return (
    <main>
      <ContentPlayer />
      <ContentDescription />
      <ContentMetadata />
    </main>
  );
};

export default Visualizer;
