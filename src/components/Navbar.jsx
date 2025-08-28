import React from "react";

export default function Navbar() {
  return (
    <header className="flex w-full z-50 transition-all duration-300">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="" className="flex items-center">
              <span className="font-bold text-purple-500 text-3xl">
                All <span className="text-white">Movies</span>
              </span>
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hiddden md:flex space-x-8">
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
          <div className="hidden md:block relative search-container">
            <div className="relative">
              <input
                type="text"
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
              <div className="absolute mt-2 w-72 bg-neutral-800 rounded-lg shadow-lg overflow-hidden z-50">
                <ul className="divide-y divide-neutral-700">
                  <li className="hover:bg-neutral-700">
                    <button className="flex items-center p-3 w-full text-left">
                      <div className="w-10 h-10 bg-neutral-700 overflow-hidden rounded flex-shrink-0">
                        {/* Conditional Rendering */}
                        <img
                          src=""
                          alt=""
                          className="w-full h-full object-cover"
                        />
                        {/* Else */}
                        <div className="w-full h-full flex items-center justify-center text-neutral-500 text-xs"></div>
                      </div>

                      <div className="ml-3 flex-1">
                        <p className="text-sm font-medium text-white truncate">
                          Movie Title
                        </p>
                        <p className="text-xs text-neutral-400">
                          Movie Release Date
                        </p>
                      </div>
                    </button>
                  </li>
                </ul>
              </div>
              {/*Conditional Rendering */}
              <div className="absolute mt-2 w-72 bg-neutral-800 rounded-lg shadow-lg overflow-hidden z-50">
                <div className="p-4 text-center text-neutral-400 text-sm">
                  No Movies Found Matching........
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white">
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
          </button>
        </div>
        {/* Mobile Navigation Conditional Rendering*/}
        <div className="mt-4 pb-4 space-y-4 md:hidden">
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
          <div className="relative mt-3 search-container">
            <input
              type="text"
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
              {/* Mobile Search Results Rendering */}
              <div className="absolute mt-2 w-full bg-neutral-800 rounded-lg shadow-lg overflow-hidden z-50">
                <ul className="divide-y divide-neutral-700">
                  {/* Map Method*/}
                  <li className="hover:bg-neutral-700">
                    <button className="flex items-center p-3 w-full text-left">
                      <div className="w-10 h-14 bg-neutral-700 rounded-full overflow-hidden flex-shrink-0">
                        {/* Conditional Rendering */}
                        <img
                          src=""
                          alt=""
                          className="w-full h-full object-cover"
                        />
                        {/* Else */}
                        <div className="w-full h-full flex items-center justify-center text-neutral-500 text-xs">
                          No Image
                        </div>
                      </div>

                      <div className="ml-3 flex-1">
                        <p className="text-sm font-medium text-white truncate">
                          Movies Title
                        </p>
                        <p className="text-xs text-neutral-400">
                          Movies Release Date
                        </p>
                      </div>
                    </button>
                  </li>
                </ul>
              </div>
              {/*Conditional Rendering */}
              <div className="absolute mt-2 w-full bg-neutral-800 rounded-lg shadow-lg overflow-hidden z-50">
                <div className="p-4 text-center text-neutral-400 text-sm">
                  No Movies Found Matching........
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
