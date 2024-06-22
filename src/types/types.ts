type JSONPrimitive = string | number | boolean | null;
type JSONObject = { [key: string]: JSONValue };
type JSONArray = JSONValue[];
type JSONValue = JSONArray | JSONObject | JSONPrimitive;

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
interface FetchOptions extends RequestInit {
  method?: HttpMethod;
  headers?: HeadersInit;
  body?: BodyInit | null;
  mode?: RequestMode;
  credentials?: RequestCredentials;
  cache?: RequestCache;
  redirect?: RequestRedirect;
  referrer?: string;
  referrerPolicy?: ReferrerPolicy;
  integrity?: string;
  keepalive?: boolean;
  signal?: AbortSignal | null;
}

type QueryObject = {
  [key: string]: string;
};

type State = {
  genres: Genre[];
};

type MediaType = 'movie' | 'tv' | 'person';

type Genre = {
  id: number;
  name: string;
};

type ProductionCompany = {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
};

type ProductionCountry = {
  iso_3166_1: string;
  name: string;
};

type SpokenLanguage = {
  english_name: string;
  iso_639_1: string;
  name: string;
};

type Media = {
  adult: boolean;
  backdrop_path: string;
  genres: Genre[];
  homepage: string;
  id: number;
  origin_country: string[];
  original_language: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  vote_average: number;
  vote_count: number;
  media_type: string;
};

type Video = {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
};

type VideoResults = {
  id: number;
  results: Video[];
};

type CastMember = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
};

type CrewMember = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  credit_id: string;
  department: string;
  job: string;
};

type Credits = {
  id: number;
  cast: CastMember[];
  crew: CrewMember[];
};

export type {
  JSONValue,
  FetchOptions,
  HttpMethod,
  Genre,
  State,
  QueryObject,
  JSONObject,
  MediaType,
  ProductionCompany,
  ProductionCountry,
  SpokenLanguage,
  Media,
  Video,
  VideoResults,
  CastMember,
  Credits,
  CrewMember
};
