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
          </div>
        </div>
      </div>
    </footer>
  );
}
