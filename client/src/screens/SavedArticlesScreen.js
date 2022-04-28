import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import Header from '../components/Header';
import SavedArticle from '../components/Articles/SavedArticle';
// import SavedArticle from '../components/Articles/SavedArticle';

const SavedArticlesScreen = () => {
  const handleSearch = (e) => {
    e.preventDefault();
  };
  return (
    <div className="bg-background px-4 md:px-10 max-w-8xl mx-auto">
      <Header />

      <h1 className="font-spratBold text-7xl lg:text-8xl pb-5">
        Saved Articles
      </h1>

      {/* Latest Articles Section */}
      <div className="pt-8 md:pt-12 pb-8">
        <div className="flex justify-center border-t-1  border-b-1 border-neutral-300">
          <form onSubmit={handleSearch}>
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-neutral-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="w-[20rem] p-4 pl-9 text-sm text-neutral-800 border-none bg-background font-spratRegular focus:outline-none"
                placeholder="Search by title or keyword..."
                autoComplete="off"
                required
              />
              <button type="submit" className="hidden ">
                Search
              </button>
            </div>
          </form>
        </div>

        {/* Mobile Header View */}
        {/* <div className="block md:hidden w-full border-t-1 border-b-1 border-neutral-300">
          <p className="font-spratRegular text-center text-xl md:text-3xl py-3">
            THE LATEST ARTICLES
          </p>
        </div> */}

        <div className="flex flex-col space-y-10 pt-5 md:pt-14">
          <Link to="/blog/1">
            <SavedArticle />
          </Link>
          <SavedArticle />
          <SavedArticle />
          <SavedArticle />
          <Link
            to="/"
            className="font-spratRegular text-sm text-neutral-900 text-center border-1 py-2 border-neutral-900 hover:shadow-md"
          >
            Show more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SavedArticlesScreen;
