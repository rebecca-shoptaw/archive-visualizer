import { useState } from "react";

/**
 * Creates a simple on-click function to store the current identifier in state.
 * Used to make the link dynamic for the indentifier search form
 * 
 * @returns The current identifier, the function to change the identifier
 */
const useDynamicIdentifier = () => {
  const [identifier, setIdentifier] = useState("");

  const handleIdentifierChange = (e: { target: { value: string } }) => {
    setIdentifier(e.target.value);
  };

  return { identifier, handleIdentifierChange };
};

export default useDynamicIdentifier;
