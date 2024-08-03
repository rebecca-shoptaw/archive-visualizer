export type MetadataObject = { [key: string]: string | string[] };

export type RelatedWork = {
  _score: number;
  _id: string;
  _source: { [key: string]: string[] | number[] };
};

export type ContentPlayerProps = {
  contentId: string;
  mediaType: string;
  filesCount: number;
};

export type ContentDescriptionProps = {
  data: MetadataObject;
  relatedWorks: null | RelatedWork[];
};

export type ContentMetadataProps = { data: MetadataObject };
