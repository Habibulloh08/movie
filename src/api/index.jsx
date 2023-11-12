import { api_key } from "../constans";
import { apiRequest } from "./axios";

const base_url = "https://api.themoviedb.org/3";

const trendingMovie = `${base_url}/trending/movie/day?api_key=${api_key}`;
const upcamingMovie = `${base_url}/movie/upcoming?api_key=${api_key}`;
const topReatedMovie = `${base_url}/movie/top_rated?api_key=${api_key}`;
const searchMovie = `${base_url}/search/movie?api_key=${api_key}`;
const moviDetail = (id) => `${base_url}/movie/${id}?api_key=${api_key}`;
const movieCredits = (id) =>
  `${base_url}/movie/${id}/credits?api_key=${api_key}`;
const similarMovie = (id) =>
  `${base_url}/movie/${id}/similar?api_key=${api_key}`;
export const fetchTredingMovie = () => {
  return apiRequest(trendingMovie);
};

export const fetchUpcomingMovie = () => {
  return apiRequest(upcamingMovie);
};

export const fetchTopRetedMovie = () => {
  return apiRequest(topReatedMovie);
};

export const fetchSearchMovie = (params) => {
  return apiRequest(searchMovie, params);
};


export const fetchMovieDetail = (id) => {
  return apiRequest(moviDetail(id));
};
export const fetchMovieCredits = (id) => {
  return apiRequest(movieCredits(id));
};
export const fetchMovieSimilar = (id) => {
  return apiRequest(similarMovie(id));
};

export const image500 = (posterPath) => {
  return posterPath ? `https://image.tmdb.org/t/p/w500${posterPath}` : null;
};

export const image342 = (posterPath) => {
  return posterPath ? `https://image.tmdb.org/t/p/w342${posterPath}` : null;
};

export const image185 = (posterPath) => {
  return posterPath ? `https://image.tmdb.org/t/p/w185${posterPath}` : null;
};
