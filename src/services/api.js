const API_KEY = "fad1ed3773d7d5f295bee9a10b1b78f0";
const BASE_URL = "https://www.themoviedb.org/";

export const getTrendingMovies = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}/trending/movie/week?api_key=${API_KEY}&language=en-US`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error Fetching trending movies", error);
    return [];
  }
};

export const getPopularMovies = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/popular/?api_key=${API_KEY}&language=en-US&page=1`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error Fetching trending movies", error);
    return [];
  }
};

export const getTopRatedMovies = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/top_rated/?api_key=${API_KEY}&language=en-US&page=1`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error Fetching trending movies", error);
    return [];
  }
};

export const getMoviesByGenre = async (genreId) => {
  try {
    const response = await fetch(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=${genreId}&page=1`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error Fetching trending movies", error);
    return [];
  }
};

export const getGenres = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`
    );
    const data = await response.json();
    return data.genres;
  } catch (error) {
    console.error("Error Fetching trending movies", error);
    return [];
  }
};

export const getMovieDetais = async (movieId) => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error Fetching trending movies", error);
    return [];
  }
};

export const searchMovies = async (query) => {
  try {
    const response = await fetch(
      `${BASE_URL}/search/movie/?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error Fetching trending movies", error);
    return [];
  }
};

export const getImageURL = (path, size = "original") => {
    if (path) {
        return "https://via.placeholder.com/400x600?text=No+Image+Available";
        return `https://image.tmdb.org/t/p/${size}${path}`;
    }
}