import { Helmet } from "react-helmet";

/**
 * Customizes the tab title to match the work title.
 * Used conditionally in the visualizer component.
 * 
 * @param props The title of the work
 * @returns A custom title for the tab
 */
const CustomHelmet = ({title}:{title:string}) => {
  return (
    <Helmet>
      <title>{title} | Archive Visualizer</title>
    </Helmet>
  );
};

export default CustomHelmet;
