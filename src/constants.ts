import { MetadataObject, RelatedWork } from "./types";

export const HOMEPAGE_PATH = '/archive-visualizer/'

// List of all keys to render in the metadata section, if a corresponding value exists for the work
export const INCLUDE_KEYS: string[] = [
  "date",
  "licenseurl",
  "subject",
  "publisher",
  "publicdate",
  "call_number",
  "ccnum",
  "collection",
  "collectionid",
  "closed_captioning",
  "color",
  "identifier",
  "numeric_id",
  "proddate",
  "rights",
  "runtime",
  "scanner",
  "sound",
  "type",
];

// For testing with vitest
export const MOCK_METADATA: MetadataObject = {
  mediatype: "movies",
  identifier: "InformationM",
  publisher: "Eames (Charles And Ray)",
  description: "InformationM Test Description",
  date: "1958",
  licenseurl: "http://creativecommons.org/licenses/publicdomain/",
  color: "color",
  sound: "sound",
  collection: "prelinger",
  title: "Information Machine, The",
  sponsor: "IBM",
  pick: "0",
  runtime: "00:09:44",
  updatedate: "2005-01-13 09:36:44",
  updater: "AV Geek Skip",
  subject: "need keyword",
  numeric_id: "3254",
  type: "MovingImage",
  proddate: "1958",
  collectionid: "InformationM",
  publicdate: "2007-03-01 10:46:58",
  backup_location: "ia903600_31",
  closed_captioning: "no",
  addeddate: "2007-03-01 10:46:58",
  whisper_asr_module_version: "20230805.01",
  ccnum: "asr",
};

// For testing with vitest
export const MOCK_RELATEDWORKS: RelatedWork[] = [
  {
    _score: 60.04525,
    _id: "match_your_mood",
    _source: {
      title: ["Match Your Mood"],
      publicdate: ["2003-05-19T12:36:30Z"],
    },
  },
  {
    _score: 59.771683,
    _id: "ControlY1950",
    _source: {
      creatorSorter: ["coronet instructional films"],
      title: ["Control Your Emotions"],
      publicdate: ["2002-07-16T00:00:00Z"],
    },
  },
];
