import React, { useEffect, useState } from "react";

export default function ScrollToTop () {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        type="buttom"
        onClick={scrollToTop}
        className={`bg-purple-600 hover:bg-purple-700 text-white p-2.5 rounded-full transition-all duration-300 focus:outline shadow-lg focus:outline-none ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
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
          class="lucide lucide-chevron-up-icon lucide-chevron-up"
        >
          <path d="m18 15-6-6-6 6" />
        </svg>
      </button>
    </div>
  );
}
