import { useState, useEffect } from "react";

import { MetadataObject, RelatedWork } from "../types";

/**
 * Fetches all necessary data for rendering content, storing values in state as needed
 * - The error state is used to determine if the fetch was successful, so as to load the "Not found" vs. the content page
 * - The metadata and related works objects provide all the necessary info to render the content and its related works
 * - The files count is used to determine whether the content should be shown as a playlist
 *
 * @param id Internet Archive identifier for the content
 * @returns Error state, metadata object, related works object, and files count
 */
const useFetchedData = (id: string | undefined) => {
  const [error, setError] = useState(false);
  const [metadata, setMetadata] = useState<null | MetadataObject>(null);
  const [relatedWorks, setRelatedWorks] = useState<null | []>(null);
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
        } else if (data.metadata.filetype === "collection") {
          setError(true);
        } else {
          setMetadata(data.metadata);
          setFilesCount(data.files_count);
        }
      })
      .catch((err) => {
        console.error(err);
        setError(true);
      });

    fetch(`https://be-api.us.archive.org/mds/v1/get_related/all//${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.hits.hits) {
          const hits = data.hits.hits.filter(
            (hit: RelatedWork) => hit._source.mediatype[0] !== "collection"
          );
          setRelatedWorks(hits);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  return { error, metadata, relatedWorks, filesCount };
};

export default useFetchedData;
