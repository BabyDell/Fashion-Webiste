"use client";
import { useState } from "react";

export default function NavBar() {
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 300) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeColor);
  }

  return (
    <nav
      className={
        color
          ? "sticky top-0 w-full transition duration-1000 ease-in-out bg-slate-300 "
          : "sticky top-0 w-full"
      }
    >
      <div className="mx-auto max-w-full sm:px-6 lg:px-8">
        <div className="relative flex items-center h-16 ">
          <div className="flex flex-1 items-stretch sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center ml-8 text-xl ">
              FASHIONISTA
            </div>
            <div className="sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <a
                  href="#Home"
                  className=" hover:bg-neutral-300 text-black rounded-md px-3 py-2 text-m font-medium"
                  aria-current="page"
                >
                  Shop
                </a>
                <a
                  href="#Projects"
                  className=" hover:bg-neutral-300 text-black rounded-md px-3 py-2 text-m font-medium"
                  aria-current="page"
                >
                  Explore
                </a>
                <a
                  href="#About"
                  className=" hover:bg-neutral-300 text-black rounded-md px-3 py-2 text-m font-medium"
                  aria-current="page"
                >
                  Trending
                </a>
              </div>
            </div>
            <form className="flex items-center max-w-sm ml-auto mr-5 grow">
              <label className="sr-only">Search</label>
              <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  id="simple-search"
                  className="bg-nuetral-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                  placeholder="Search..."
                  required
                />
              </div>
            </form>
            <div className="flex items-center space-x-2 mr-8">
              <a
                href="#About"
                className=" bg-slate-200 hover:bg-slate-300 text-black rounded-2xl px-3 py-2 text-m font-medium "
                aria-current="page"
              >
                Log In
              </a>
              <a
                href="#About"
                className=" bg-emerald-400 hover:bg-emerald-500 text-black rounded-2xl px-3 py-2 text-m font-medium"
                aria-current="page"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
