import React from "react";

export default function HeroSection() {
  return (
    <div className="relative w-full h-screen">
      <div className="absolute inset-0 bg-center bg-neutral-900 transition-all">
        {/*  Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-900/70 to-neutral-900/20">
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 to-transparent"></div>
          {/* Content */}
          <div className="absolute inset-0 flex items-center z-10 container mx-auto px-4">
            <div className="max-w-3xl">
              {/* Movies Info */}
              <div className={"transition-all duration-700"}>
                <div className="flex items-center space-x-3 mb-4">
                  <span className="bg-purple-500/90 text-white text-xs font-semibold px-2 py-1 rounded-sm">
                    FEATURED
                  </span>
                  {/* Conditional Rendering */}
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
                    <span>Movie Voting Average</span>
                  </div>
                  {/* Conditional Rendering Close*/}
                  <span className="text-neutral-400 text-sm">.</span>
                  <span className="text-neutral-400 text-sm">
                    Movies Release Date
                  </span>
                  {/* Conditional Rendering */}
                  <>
                    <span className="text-neutral-400">.</span>
                    <span className="bg-neutral-700 text-neutral-300 text-xs px-11.5 py-0.5">
                      18+
                    </span>
                  </>
                  {/* Conditional Rendering Close */}
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                  Movies Title
                </h1>
                <p className="text-neutral-300 text-base md:text-lg mb-8 line-clamp-3 md:line-clamp-4 max-w-2xl">
                  Movie Overview
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-all">
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
                  <button className="bg-neutral-800/80 hover:bg-neutral-700/80 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-all border border-neutral-600">
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
                    Add To Watch List
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Pagination */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-2 z-10">
            {/* Conditional Rendering */}
            <button className={'h-1.5 rounded-full transition-all'}>

            </button>

        </div>
      </div>
    </div>
  );
}
