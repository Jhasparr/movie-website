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

          </nav>
        </div>
      </div>
    </header>
  );
}
