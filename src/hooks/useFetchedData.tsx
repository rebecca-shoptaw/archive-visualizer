import { useState, useEffect } from "react";
import { MetadataObject } from "../types";

const useFetchedData = (id: string | undefined) => {
  const [error, setError] = useState(false);
  const [metadata, setMetadata] = useState<null | MetadataObject>(null);
  const [filesCount, setFilesCount] = useState(1);

  useEffect(() => {
    if (!id) {
      setError(true);
      return;
    }

    fetch(`https://archive.org/metadata/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (!data.metadata || !data.files_count || data.files_count < 1) {
          setError(true);
        } else {
          setMetadata(data.metadata);
          setFilesCount(data.files_count);
        }
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  }, [id]);

  return { error, metadata, filesCount };
};

export default useFetchedData;
