export type MetadataObject = { [key: string]: string | string[] };

export type RelatedWork = {
  _score: number;
  _id: string;
  _source: { [key: string]: string[] | number[] };
};
