import { type Movie } from "./Movie";

export type MovieDetail = Movie & {
  genre: string[];
  adult: boolean;
  budget: number;
  originalLanguage: string;
  productionCompanies: string[];
  languages: string[];
  voteCount: number;
  dataImages?: string[];
};
