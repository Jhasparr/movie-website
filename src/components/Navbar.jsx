import React, { useEffect, useState, useRef } from "react";
import { getImageURL, searchMovies } from "../services/api";
import { useMovies } from "../context/MovieContext";

export default function Navbar() {
  const { openMoviesDetails } = useMovies();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showSearchResult, setShowSearchResults] = useState(false);
  const searchContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleSearch = async () => {
      if (searchQuery.trim().length > 2) {
        setIsSearching(true);
        try {
          const result = await searchMovies(searchQuery);
          setSearchResult(result ? result.slice(0, 8) : []);
        } catch (error) {
          console.error("Error Searching Movies", error);
        } finally {
          setIsSearching(false);
          setShowSearchResults(true);
        }
      } else {
        setSearchResult([]);
        setShowSearchResults(false);
      }
    };

    const debounceTimer = setTimeout(() => {
      handleSearch();
    }, 500);

    return () => {
      clearTimeout(debounceTimer);
    };
  }, [searchQuery]);

  const handleSearchFocus = () => {
    if (searchQuery.trim().length > 2 && searchResult.length > 0) {
      setShowSearchResults(true);
    }
  };

  const handleClickOutside = (e) => {
    if (
      searchContainerRef.current &&
      !searchContainerRef.current.contains(e.target)
    ) {
      setShowSearchResults(false);
    }
  };

  const handleMovieSelect = (movieId) => {
    openMoviesDetails(movieId);
    setShowSearchResults(false);
    setSearchQuery("");
  };

  

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-neutral-900/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="" className="flex items-center">
              <span className="font-bold text-purple-500 text-3xl">
                All<span className="text-white">Movies</span>
              </span>
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#"
              className="text-white hover:text-purple-400 transition-all font-medium"
            >
              Home
            </a>
            <a
              href="#trending"
              className="text-white hover:text-purple-400 transition-all font-medium"
            >
              Trending
            </a>
            <a
              href="#popular"
              className="text-white hover:text-purple-400 transition-all font-medium"
            >
              Popular
            </a>
            <a
              href="#top-rated"
              className="text-white hover:text-purple-400 transition-all font-medium"
            >
              Top Rated
            </a>
          </nav>
          {/* Desktop Search */}
          <div
            className="hidden md:block relative search-container"
            ref={searchContainerRef}
          >
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onFocus={handleSearchFocus}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Movies......."
                className="bg-neutral-800/80 text-white px-4 py-2 rounded-full text-sm w-48 focus:w-64 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
              />
              {/* Conditional Rendering */}
              <div className="absolute right-3 top-2.5 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#919092"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-search-icon lucide-search "
                >
                  <path d="m21 21-4.34-4.34" />
                  <circle cx="11" cy="11" r="8" />
                </svg>
              </div>
              {/* Search Results Rendering */}
              {showSearchResult && searchResult && searchResult.length > 0 && (
                <div className="absolute mt-2 w-72 bg-neutral-800 rounded-lg shadow-lg overflow-hidden z-50">
                  <ul className="divide-y divide-neutral-700">
                    {searchResult.map((movie) => {
                      return (
                        <li className="hover:bg-neutral-700">
                          <button
                            className="flex items-center p-3 w-full text-left"
                            onClick={() => handleMovieSelect(movie.id)}
                          >
                            <div className="w-10 h-10 bg-neutral-700 overflow-hidden rounded flex-shrink-0">
                              {/* Conditional Rendering */}
                              {movie.poster_path ? (
                                <img
                                  src={getImageURL(movie.poster_path, "w92")}
                                  alt=""
                                  className="w-full h-full object-cover"
                                />
                              ) : (
                                <div className="w-full h-full flex items-center justify-center text-neutral-500 text-xs"></div>
                              )}
                            </div>
                            {/* Else */}

                            <div className="ml-3 flex-1">
                              <p className="text-sm font-medium text-white truncate">
                                {movie.title}
                              </p>
                              <p className="text-xs text-neutral-400">
                                {movie.release_date?.split("-")[0] || "N/A"}
                              </p>
                            </div>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
              {/*Conditional Rendering */}
              {showSearchResult &&
                searchQuery.trim().length > 2 &&
                (!searchResult || searchResult.length === 0) &&
                !isSearching && (
                  <div className="absolute mt-2 w-72 bg-neutral-800 rounded-lg shadow-lg overflow-hidden z-50">
                    <div className="p-4 text-center text-neutral-400 text-sm">
                      No Movies Found Matching........
                    </div>
                  </div>
                )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenOpen)}
          >
            {/* Conditional Rendering */}
            {isMobileMenOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-square-x-icon lucide-square-x"
              >
                <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                <path d="m15 9-6 6" />
                <path d="m9 9 6 6" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-align-justify-icon lucide-align-justify"
              >
                <path d="M3 12h18" />
                <path d="M3 18h18" />
                <path d="M3 6h18" />
              </svg>
            )}
          </button>
        </div>
        {/* Mobile Navigation Conditional Rendering*/}
        {isMobileMenOpen && (
          <div className="mt-4 pb-4 space-y-4 md:hidden ">
            <a
              href="#"
              className="text-white py-2 hover:text-purple-400 transition-all font-medium block"
            >
              Home
            </a>
            <a
              href="#trending"
              className="text-white py-2 hover:text-purple-400 transition-all font-medium block"
            >
              Trending
            </a>
            <a
              href="#popular"
              className="text-white py-2 hover:text-purple-400 transition-all font-medium block"
            >
              Popular
            </a>
            <a
              href="#top-rated"
              className="text-white py-2 hover:text-purple-400 transition-all font-medium block"
            >
              Top Rated
            </a>
            <div
              className=" py-2 mt-3 search-container"
              ref={searchContainerRef}
            >
              <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={handleSearchFocus}
                placeholder="Search Movies......."
                className="bg-neutral-800/80 text-white px-4 py-2 rounded-full text-sm w-48 focus:w-64 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500/50 pr-10"
              />
              {/* Conditional Rendering */}
             
             
              </div>
              {/* Mobile Search Results Rendering */}
              {showSearchResult && searchResult && searchResult.length > 0 && (
                <div className="absolute mt-2 w-full bg-neutral-800 rounded-lg shadow-lg max-h-80 overflow-y-auto z-50">
                  <ul className="divide-y divide-neutral-700">
                    {/* Map Method*/}
                    {searchResult.map((movie) => {
                      return (
                        <li className="hover:bg-neutral-700">
                          <button
                            onClick={() => handleMovieSelect(movie.id)}
                            className="flex items-center p-3 w-full text-left"
                          >
                            <div className="w-10 h-14 bg-neutral-700 rounded-full overflow-hidden flex-shrink-0">
                              {/* Conditional Rendering */}
                              {/* Conditional Rendering */}
                              {movie.poster_path ? (
                                <img
                                  src={getImageURL(movie.poster_path, "w92")}
                                  alt=""
                                  className="w-full h-full object-cover"
                                />
                              ) : (
                                <div className="w-full h-full flex items-center justify-center text-neutral-500 text-xs"></div>
                              )}
                            </div>

                            <div className="ml-3 flex-1">
                              <p className="text-sm font-medium text-white truncate">
                                {movie.title}
                              </p>
                              <p className="text-xs text-neutral-400">
                                {movie.release_date?.split("-")[0] || "N/A"}
                              </p>
                            </div>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
              {/*Conditional Rendering */}
              {showSearchResult &&
                searchQuery.trim().length > 2 &&
                (!searchResult || searchResult.length === 0) &&
                !isSearching && (
                  <div className="absolute mt-2 w-full bg-neutral-800 rounded-lg shadow-lg overflow-hidden z-50">
                    <div className="p-4 text-center text-neutral-400 text-sm">
                      No Movies Found Matching........
                    </div>
                  </div>
                )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
