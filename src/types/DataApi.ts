import { Movie } from "./Movie";

export type DataApi = {
  page: number;
  results: Movie[];
  totalPages: number;
  totalResults: number;
};
