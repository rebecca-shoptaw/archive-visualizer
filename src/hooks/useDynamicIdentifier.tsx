import { useState } from "react";

const useDynamicIdentifier = () => {
  const [identifier, setIdentifier] = useState("");

  const handleIdentifierChange = (e: { target: { value: string } }) => {
    setIdentifier(e.target.value);
  };

  return { identifier, handleIdentifierChange };
};

export default useDynamicIdentifier;
