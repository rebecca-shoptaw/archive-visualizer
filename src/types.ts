export type MetadataObject = { [key: string]: string | string[] };

export type RelatedWork = {
  _score: number;
  _id: string;
  _source: { [key: string]: string[] | number[] };
};

export type ContentPlayerProps = {
  contentId: string;
  contentTitle: string;
  type: string;
};

export type AudioPlayerProps = {
  contentId: string;
  contentTitle: string;
};

export type ContentDescriptionProps = {
  data: MetadataObject;
  relatedWorks: null | RelatedWork[];
};

export type ContentMetadataProps = { data: MetadataObject };
