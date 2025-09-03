import React, { useEffect, useState } from "react";
import { getImageURL, getMovieDetais } from "../services/api";

export default function MovieDetails({ movieId, onClose }) {
  const [movie, setMovie] = useState(null);
  const [loading, setIsLoading] = useState(true);
  const [error, setIsError] = useState(null);

  useEffect(() => {
    async function bringMoviesDetails() {
      try {
        setIsLoading(true);
        const movieData = await getMovieDetais(movieId);
        setMovie(movieData);
      } catch (error) {
        console.error("Failed To Load Movies Details, Please Try Again");
      } finally {
        setIsLoading(false);
      }
    }
    if (movieId) {
      bringMoviesDetails();
    }
  }, [movieId]);

  if (!movieId) return null;

  const formatRunTime = (minutes) => {
    if (!minutes) return "N/A";
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}m`;
  };

  const formatRating = (rating) => {
    return (Math.round(rating * 10) / 10).toFixed(1);
  };

  const formatRevenue = (revenue) => {
    if (!revenue) return "N/A";
    return new Intl.NumberFormat("en-Us", {
      style: "currency",
      currency: "USD",
      notation: "compact",
      maximumFractionDigits: 1,
    }).format(revenue);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-900/95 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-neutral-800 rounded-lg shadow-xl max-h-[90vh] overflow-y-auto">
        {/* Close Button*/}
        <button
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-neutral-700/80 text-white hover:bg-neutral-600/80 transition-colors"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#cececf"
            stroke-width="2.25"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-x-icon lucide-x"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>

        {loading ? (
          <div className="flex items-center justify-center h-96">
            <div className="animate-pulse">
              <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin">
                <p className="mt-4 text-neutral-400">Loading Details...</p>
              </div>
            </div>
          </div>
        ) : error ? (
          <div className="flex items-center justify-center h-96">
            <div className="text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="76"
                height="76"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#752929"
                stroke-width="2.25"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-triangle-alert-icon lucide-triangle-alert mx-auto"
              >
                <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
                <path d="M12 9v4" />
                <path d="M12 17h.01" />
              </svg>

              <h2 className="text-xl font-bold mt-4">
                Failed To Load Movies Details
              </h2>
              <p className="mt-2 text-neutral-400">{error}</p>
              <button
                className="mt-6 bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-md "
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </div>
        ) : movie ? (
          <div>
            {/* Backdrop Header*/}
            <div className="relative h-72 md:h-96 w-full">
              {movie.backdrop_path ? (
                <img
                  src={getImageURL(movie.backdrop_path)}
                  alt={movie.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-neutral-700 "> </div>
              )}
              {/* Gradient Overlay*/}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-800 via-neutral-800/70 to-transparent"></div>
            </div>

            <div className="p-6 md:p-8">
              <div className="md:flex gap-8 -mt-32 md:-mt-48 relative">
                {/* Poster */}
                <div className="w-32 md:w-64 flex-shrink-0 mb-4 md:mb-0">
                  <div className="rounded-lg overflow-hidden shadow-lg border border-neutral-700">
                    {movie.poster_path ? (
                      <img
                        src={getImageURL(movie.poster_path, "w500")}
                        alt={movie.title}
                        className="w-full h-auto"
                      />
                    ) : (
                      <div className="w-full aspect-[2/3] bg-neutral-700 flex items-center justify-center">
                        <span className="text-neutral-500">
                          No Poster Available
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Movies Info*/}
                <div className="flex-1">
                  <h1 className="text-3xl md:text-4xl font-bold text-white">
                    {movie.title}
                    {/*  Conditional Rendering */}
                    {movie.release_date && (
                      <span className="text-neutral-400 font-normal ml-2">
                        ({movie.release_date.substring(0, 4)})
                      </span>
                    )}
                  </h1>
                  {/* Rating and other meta (possible mistake)*/}
                  <div className="flex flex-wrap gap-x-4 gap-y-2 mt-3 text-sm items-center">
                    {movie.vote_average > 0 && (
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="#FACC15"
                          stroke="#FACC15"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="lucide lucide-star"
                        >
                          <path d="M12 17.75 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                        </svg>

                        <span className="ml-1 font-medium">
                          {formatRating(movie.vote_average)}
                        </span>
                      </div>
                    )}

                    {movie.runtime > 0 && (
                      <span className="text-neutral-300">
                        {formatRunTime(movie.runtime)}
                      </span>
                    )}
                    {movie.release_date && (
                      <span className="text-neutral-300">
                        {movie.release_date}
                      </span>
                    )}
                    {movie.adult && (
                      <span className="bg-red-500/80 text-white text-xs px-2 py-0.5 rounded ">
                        18+
                      </span>
                    )}
                  </div>
                  {/* Genres */}
                  {/* Conditional Rendering*/}
                  {movie.genres && movie.genres.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {movie.genres.map((genre) => (
                        <span
                          className="bg-neutral-700 text-neutral-300 px-3 py-1 rounded-full text-xs"
                          key={genre.id}
                        >
                          {genre.name}{" "}
                        </span>
                      ))}
                    </div>
                  )}
                  {/* remove */}
                  {/*Tagline*/}
                  {movie.tagline && (
                    <p className="mt-4 text-neutral-400 italic">
                      {movie.tagline}
                    </p>
                  )}

                  {/* Overview*/}
                  <div className="mt-6">
                    <h2 className="text-xl font-semibold text-white mb-2">
                      {" "}
                      Overview
                    </h2>
                    <p className="text-neutral-300">
                      {movie.overview || "No Overview Available"}
                    </p>
                  </div>
                  {/* Buttons */}
                  <div className="mt-8 flex flex-wrap gap-3">
                    <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-play-circle"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="m10 8 6 4-6 4V8Z" />
                      </svg>
                      Watch Now
                    </button>
                    <button className="bg-neutral-700 hover:bg-neutral-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-all">
                      {/* addd svg */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-plus-icon lucide-plus"
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5v14" />
                      </svg>
                      Add To Watchlist
                    </button>
                  </div>
                </div>
              </div>
              {/* Additional Details */}
              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-xl font-semibold text-white mb-4">
                    {" "}
                    Details
                  </h2>

                  <div className="space-y-4">
                    {movie.production_companies &&
                      movie.production_companies.length > 0 && (
                        <div className=" text-neutral-400 text-sm mb-1">
                          <h3 className="text-neutral-400 text-sm mb-1">
                            Production Companies
                          </h3>
                          <p className="text-white">
                            {movie.production_companies
                              .map((company) => company.name)
                              .join(", ")}
                          </p>
                        </div>
                      )}
                    {movie.production_countries &&
                      movie.production_countries.length > 0 && (
                        <div>
                          <h3 className="text-neutral-400 text-sm mb-1">
                            Production Countries
                          </h3>
                          <p className="text-white">
                            {movie.production_countries
                              .map((country) => country.name)
                              .join(", ")}
                          </p>
                        </div>
                      )}
                    {movie.spoken_languages &&
                      movie.spoken_languages.length > 0 && (
                        <div className=" text-neutral-400 text-sm mb-1">
                          <h3 className="text-neutral-400 text-sm mb-1">
                            Languages
                          </h3>
                          <p className="text-white">
                            {movie.spoken_languages
                              .map((language) => language.english_name)
                              .join(", ")}
                          </p>
                        </div>
                      )}
                    {movie.budget > 0 && (
                      <div>
                        <h3 className="text-neutral-400 text-sm mb-1">
                          Budget
                        </h3>
                        <p className="text-white">
                          {formatRevenue(movie.budget)}
                        </p>
                      </div>
                    )}
                    {movie.revenue > 0 && (
                      <div>
                        <h3 className="text-neutral-400 text-sm mb-1">
                          Revenue
                        </h3>
                        <p className="text-white">
                          {formatRevenue(movie.revenue)}
                        </p>
                      </div>
                    )}
                    {movie.status && (
                      <div>
                        <h3 className="text-neutral-400 text-sm mb-1">
                          Status
                        </h3>
                        <p className="text-white">{movie.status}</p>
                      </div>
                    )}
                    {movie.original_language && (
                      <div>
                        <h3 className="text-neutral-400 text-sm mb-1">
                          Original Language
                        </h3>
                        <p className="text-white">
                          {movie.original_language.toUpperCase()}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
                {/* Right Column */}
                <div>
                  <h2 className="text-xl font-semibold text-white mb-4">
                    Rating
                  </h2>
                  {movie.vote_average > 0 ? (
                    <div className="flex items-center">
                      <div className="w-24 h-24 rounded-full border-4 border-purple-500 flex items-center justify-center mr-4">
                        <span className="text-3xl font-bold">
                          {formatRating(movie.vote_average)}
                        </span>
                      </div>
                      <div>
                        <p className="text-neutral-500">
                          From {movie.vote_count.toLocaleString()} votes
                        </p>
                        <div className="w-full bg-neutral-700 rounded-full h-2.5 mt-2">
                          <div
                            className="bg-purple-600 h-2.5 rounded-full"
                            style={{
                              width: `${(movie.vote_average / 10) * 100}%`,
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <p className="text-neutral-400">No Rating Available</p>
                  )}

                  {/* Else  */}

                  {/* IMDB and Homage Page Link */}
                  <div className="mt-8 space-y-4">
                    {movie.homepage && (
                      <a
                        href={movie.homepage}
                        className="inline-flex items-center bg-neutral-700 hover:bg-neutral-600 text-white px-4 py-2 rounded transition-all"
                      >
                        {/* Add Svg */}
                      
                       
                      
                        Official Website
                      </a>
                    )}
                    {/* Conditional Rendering */}

                    {/* Conditional Rendering */}
                    {movie.imdb_id && (
                      <a
                        href={`https://www.imdb.com/title/${movie.imdb_id}`}
                        target="_blank"
                        rel="noopener noopener"
                        className="inline-flex items-center bg-yellow-700 hover:bg-yellow-600 text-white px-4 py-2 rounded transition-colors"
                      >
                        View on IMDB
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
