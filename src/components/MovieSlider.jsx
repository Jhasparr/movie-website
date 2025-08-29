import React from "react";

export default function MovieSlider() {
  return (
    <section className="py-12" id="">
      <div className=" container mx-auto px-4">
        <div className="flex items-baseline justify-between mb-8">
          <div className="text-2xl md:text-3xl font-bold text-white">
            <h2>Title</h2>
            {/* Conditional Rendering */}
            <p className=" text-neutral-400 text-sm mt-1">Subtitle</p>
          </div>
          <div className="flex space-x-2">
            <button
              className="p-2 rounded-full bg-neutra-800/70 hover:bg-neutral-700 text-white transition-all"
              aria-label="Scroll Left"
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
              className="p-2 rounded-full bg-neutra-800/70 hover:bg-neutral-700 text-white transition-all"
              aria-label="Scroll Right "
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
          <div className="flex space-x-4 overflow-x-hidden scrollbar-hide pb-4 snap-x">
            {/* Conditional Rendering */}
            <div className="min-w-[200px] md:min-w-[240px] snap-start relative group cursor-pointer">
              <div className="rounded-lg overflow-hidden bg-neutral-800">
                <div className="relative aspect-[2/3]">
                  <img
                    src=""
                    alt=""
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
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="lucide lucide-star"
                          >
                            <path d="M12 17.75 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                          <span className="text-sm font-medium text-yellow-400">
                            Movies Vote Average

                          </span>
                          
                        </div>
                        <span className="text-neutral-400 text-sm">
                          Movies Release Date
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
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="lucide lucide-info"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <line x1="12" y1="16" x2="12" y2="12" />
                          <line x1="12" y1="8" x2="12.01" y2="8" />
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
                  Movies Title
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
                    <span className="text-neutral-500 text-xs"> Movies Release Date </span>
                    
                  </div>
                  <span>
                    
                  </span>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
