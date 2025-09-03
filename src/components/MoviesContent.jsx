import React from "react";
import HeroSection from "./HeroSection";
import MovieSlider from "./MovieSlider";
import GenreSection from "./GenreSection";
import MovieDetails from "./MovieDetails";
import { useMovies } from "../context/MovieContext";

export default function MoviesContent() {
  const {
    trendingMovies,
    popularMovies,
    topRatedMovies,
    selectedMovieId,
    closeMovieDetails,
    error,
  } = useMovies();

  if (error) {
    return (
      <div className="flex items-center justify-center bg-neutral-900 min-h-screen text-white">
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

          <h2 className="text-2xl font-bold mt-4">Error Loading Movies</h2>
          <p className="mt-2 text-neutral-400">{error}</p>
          <button
            className="mt-6 bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-md "
            onClick={() => window.location.reload()}
          >
            Retry
          </button>
        </div>
      </div>
    );
  }
  return (
    <>
      <HeroSection />
      <div className="bg-gradient-to-b from-neutral-900 to-neutral-950">
        <MovieSlider
          title="Trending This Week"
          subtitle="Stay Updated With What Everyone Is Watching"
          movies={trendingMovies}
          id="trending"
        />
        <MovieSlider
          title="Popular Movies"
          subtitle="Most Watched Movies Right Now"
          movies={popularMovies}
          id="popular"
        />
        <GenreSection />
         <MovieSlider
          title="Top Rated Movies"
          subtitle="Highest Rated Movies Of All Time"
          movies={topRatedMovies}
          id="top-rated"
        />
      </div>
      {/*Conditional Rendering*/}
       {selectedMovieId && 
       <MovieDetails movieId={selectedMovieId} onClose ={closeMovieDetails}/>  }
 
    </>
  );
}
