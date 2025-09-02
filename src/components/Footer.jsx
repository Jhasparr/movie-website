import React from "react";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-400 border-t border-neutral-800">
      <div className=" container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="">
            <a href="/" className="inline-block mb-6">
              <span className="text-purple-500 font-bold text-2xl">
                All <span className="text-white">Movies</span>
              </span>
            </a>
            <p className="mb-4 text-sm">
              {" "}
              Cinema opens the door to countless worlds, emotions, and
              adventures. With our vast collection, you can explore every story,
              from legendary classics to the newest releases all in one place.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-neutral-500 hover:text-purple-500 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-twitter-icon lucide-twitter"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-neutral-500 hover:text-purple-500 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-instagram-icon lucide-instagram"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a
                href="#"
                className="text-neutral-500 hover:text-purple-500 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-facebook-icon lucide-facebook"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="" className="hover:text-purple-400 transition-all">
                  Home
                </a>
              </li>
              <li>
                <a href="" className="hover:text-purple-400 transition-all">
                  Trending
                </a>
              </li>
              <li>
                <a href="" className="hover:text-purple-400 transition-all">
                  Popular
                </a>
              </li>
              <li>
                <a href="" className="hover:text-purple-400 transition-all">
                  Top Rated
                </a>
              </li>
              <li>
                <a href="" className="hover:text-purple-400 transition-all">
                  Browse By Genre
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-purple-400">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400">
                  Help Center
                </a>
              </li>
            </ul>
          </div>
          <div >
            <h3 className="text-white font-semibold text-lg mb-4">Newsletter</h3>
            <p className="text-sm mb-4">Stay up to date with the latest movies</p>
            <form className="space-y-3">
                <div className="relative">
                    <input type="email" placeholder="Your Email Address" className="w-full bg-neutral-800 border-neutral-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/50 text-sm" />
                </div>
                <button className="w-full bg-purple-600 hover:bg-purple-700 text-shadow-current py-2 rounded-lg transition-all text-sm">
                    Subscribe

                </button>
            </form>

          </div>
         

        </div>
         <div className="border-t border-neutral-800 mt-10 pt-6 flex flex-col md:flex-row justify-between">
            <p className="text-xs">
                &copy; AllMovies. All Rights Reserved <br className="md:hidden" />
                <span className="hidden md:inline">.</span>
                Powered By <a href="#" className="text-purple-400 hover:text-purple-300">TMDB API</a>
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0 text-xs">
                <a href="" className="hover:text-purple-400 transition-all">Privacy Policy</a>
                <a href="" className="hover:text-purple-400 transition-all">Terms Of Services</a>
                <a href="" className="hover:text-purple-400 transition-all">Cookies Policy</a>

            </div>

          </div>
      </div>
    </footer>
  );
}
