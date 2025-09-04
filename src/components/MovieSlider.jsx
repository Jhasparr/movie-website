import React, { useRef, useState } from "react";
import { getImageURL } from "../services/api";
import { useMovies } from "../context/MovieContext";

export default function MovieSlider({ title, movies, subtitle, id = "" }) {
  const sliderRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [hoveredMovieId, setHoveredMovieId] = useState(null);
  const { openMoviesDetails } = useMovies();

  const scroll = (direction) => {
    if (isScrolling) return;
    setIsScrolling(true);
    const { current } = sliderRef;
    const scrollAmount =
      direction === "left"
        ? -current.clientWidth * 0.75
        : current.clientWidth * 0.75;

    current.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });

    setTimeout(() => {
      setIsScrolling(false);
    }, 500);
  };

  const formatRating = (rating) => {
    return (Math.round(rating * 10) / 10).toFixed(1);
  };

  const handleMovieClick = (moviesId) => {
    openMoviesDetails(moviesId);
    console.log("working")
  };

  if (!movies || movies.length === 0) {
    return null;
  }

  return (
    <section className="py-12" id={id}>
      <div className=" container mx-auto px-4">
        <div className="flex items-baseline justify-between mb-8">
          <div className="text-2xl md:text-3xl font-bold text-white">
            <h2>{title}</h2>
            {/* Conditional Rendering */}
            {subtitle && (
              <p className=" text-neutral-400 text-sm mt-1">{subtitle}</p>
            )}
          </div>
          <div className="flex space-x-2">
            <button
              className="p-2 rounded-full bg-neutral-800/70 hover:bg-neutral-700 text-white transition-all"
              aria-label="Scroll Left"
              onClick={() => scroll("left")}
            >
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
                class="lucide lucide-chevron-left"
              >
                <path d="M15 18 9 12l6-6" />
              </svg>
            </button>
            <button
              className="p-2 rounded-full bg-neutral-800/70 hover:bg-neutral-700 text-white transition-all"
              aria-label="Scroll Right "
              onClick={() => scroll("right")}
            >
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
                class="lucide lucide-chevron-right"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
        {/* Movie Slider*/}
        <div className="relative">
          <div
            className="flex space-x-4 overflow-x-hidden scrollbar-hide pb-4 snap-x"
            ref={sliderRef}
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {/* Conditional Rendering */}
            {movies.map((movie) => {
              return (
                <div
                  className="min-w-[200px] md:min-w-[240px] snap-start relative group cursor-pointer"
                  key={movie.id}
                  onMouseEnter={() => setHoveredMovieId(movie.id)}
                  onMouseLeave={() => setHoveredMovieId(null)}
                  onClick={() => handleMovieClick(movie.id)}
                >
                  <div className="rounded-lg overflow-hidden bg-neutral-800">
                    <div className="relative aspect-[2/3]">
                      <img
                        src={getImageURL(movie.poster_path, "w500")}
                        alt={movie.title}
                        className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110 group-hover:opacity-35"
                      />
                      {/* Hover Overlay */}
                      <div
                        className={
                          "absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/40 to transparent flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
                        }
                      >
                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 space-y-3">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-1">
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
                              <span className="text-sm font-medium text-yellow-400">
                                {formatRating(movie.vote_average)}
                              </span>
                            </div>
                            <span className="text-neutral-400 text-sm">
                              {movie.release_date?.substring(0, 4) || "N/A"}
                            </span>
                          </div>
                          <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-md flex items-center justify-center gap-1 text-sm transition-all">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="lucide lucide-circle-play-icon lucide-circle-play"
                            >
                              <path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z" />
                              <circle cx="12" cy="12" r="10" />
                            </svg>
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Movie Info */}
                  <div className="mt-3">
                    <h3 className="text-white text-sm font-medium truncate">
                      {movie.title}
                    </h3>
                    <div className="flex items-center justify-between ">
                      <div className="flex items-center space-x-1">
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
                        <span className="text-xs text-neutral-400">
                          Movies Vote Average
                        </span>
                      </div>
                      <span className="text-neutral-500 text-xs">
                        {" "}
                        {movie.release_date?.substring(0, 4)}{" "}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
